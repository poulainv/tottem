import { ApolloProvider } from '@apollo/react-hooks'
import { defaultDataIdFromObject, InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import { ApolloLink } from 'apollo-link'
import React from 'react'
import { Auth0 } from '../pages/_document'
import { onError } from 'apollo-link-error'
import { openNotification } from '../utils/errors'

let apolloClient = null

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export function withApollo(PageComponent, { ssr = true } = {}) {
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
        const client = apolloClient || initApolloClient(apolloState)
        return (
            <ApolloProvider client={client}>
                <PageComponent {...pageProps} />
            </ApolloProvider>
        )
    }

    // Set the correct displayName in development
    if (process.env.NODE_ENV !== 'production') {
        const displayName =
            PageComponent.displayName || PageComponent.name || 'Component'

        if (displayName === 'App') {
            console.warn('This withApollo HOC only works with PageComponents.')
        }

        WithApollo.displayName = `withApollo(${displayName})`
    }

    if (ssr || PageComponent.getInitialProps) {
        WithApollo.getInitialProps = async ctx => {
            const { AppTree } = ctx

            // Initialize ApolloClient, add it to the ctx object so
            // we can use it in `PageComponent.getInitialProp`.
            const apolloClient = (ctx.apolloClient = initApolloClient())

            // Run wrapped getInitialProps methods
            let pageProps = {}
            if (PageComponent.getInitialProps) {
                pageProps = await PageComponent.getInitialProps(ctx)
            }

            // Only on the server:
            if (typeof window === 'undefined') {
                // When redirecting, the response is finished.
                // No point in continuing to render
                if (ctx.res && ctx.res.finished) {
                    return pageProps
                }

                // Only if ssr is enabled
                if (ssr) {
                    try {
                        // Run all GraphQL queries
                        const { getDataFromTree } = await import(
                            '@apollo/react-ssr'
                        )
                        await getDataFromTree(
                            <AppTree
                                pageProps={{
                                    ...pageProps,
                                    apolloClient,
                                }}
                            />
                        )
                    } catch (error) {
                        // Prevent Apollo Client GraphQL errors from crashing SSR.
                        // Handle them in components via the data.error prop:
                        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                        console.error(
                            'Error while running `getDataFromTree`',
                            error
                        )
                    }

                    // getDataFromTree does not call componentWillUnmount
                    // head side effect therefore need to be cleared manually
                    Head.rewind()
                }
            }

            // Extract query data from the Apollo store
            const apolloState = apolloClient.cache.extract()
            return {
                ...pageProps,
                apolloState,
            }
        }
    }

    return WithApollo
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
function initApolloClient(initialState) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (typeof window === 'undefined') {
        return createApolloClient(initialState)
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = createApolloClient(initialState)
    }

    return apolloClient
}

/*
 * This function add authentication token into graphql request when
 * requests have been made from client side.
 * It also handles access token renewal when it has been expired
 */
const authLink = setContext((_, { headers }) => {
    const isServer = typeof window === 'undefined'
    // localStorage does not exist on server side
    // FIXME use cookie session instead
    // For now it means that SSR can not do authenticated request to API
    const shouldRenew = isServer ? false : !Auth0.isAuthenticated()

    let promise
    if (shouldRenew) {
        // access token needs to be renew on client side
        promise = Auth0.renewSession()
    } else if (!isServer) {
        // access token is still valid get it on client side
        promise = Promise.resolve(localStorage.getItem('access_token'))
    } else {
        // server side no access token
        promise = Promise.resolve('')
    }

    return promise.then(token => {
        return {
            headers: {
                ...headers,
                authorization: token ? `${token}` : '',
            },
        }
    })
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            openNotification(
                message,
                'Aïe ! Re-tentez le coup, sinon contactez-nous.'
            )
        )
    if (networkError) console.log(`[Network error]: ${networkError}`)
})

function createApolloClient(initialState = {}) {
    const httpLink = createHttpLink({
        uri: process.env.GRAPHQL_URL,
        credentials: 'same-origin',
        fetch,
    })

    const links = ApolloLink.from([authLink, errorLink, httpLink])

    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
        link: links,
        resolvers: {},
        cache: new InMemoryCache({
            cacheRedirects: {
                // FIXME We do want composite keys that will be supported in Apollo Client V3
                Query: {
                    // Allow query to get cache (partial)
                    collection: (_, args, { getCacheKey }) => {
                        return getCacheKey({
                            __typename: 'Collection',
                            slug: args.where.slug,
                        })
                    },
                },
            },
            dataIdFromObject: object => {
                switch (object.__typename) {
                    case 'Collection':
                        return `Collection:${object.slug}`
                    default:
                        return defaultDataIdFromObject(object) // fall back to default handling
                }
            },
        }).restore(initialState),
    })
}
