import { ApolloProvider } from '@apollo/react-hooks'
import { defaultDataIdFromObject, InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import React from 'react'
import { Auth0 } from '../pages/_document'

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

const authLink = setContext((_, { headers }) => {
    const isServer = typeof window === 'undefined'
    // localStorage does not exist on server side
    // FIXME use cookie session instead
    // For now it means that SSR can not do authenticated request to API
    const token = isServer ? '' : localStorage.getItem('token')
    return {
        headers: {
            ...headers,
            authorization: token ? `${token}` : '',
        },
    }
})

function createApolloClient(initialState = {}) {
    var graphqlUrl =
        process.env.NODE_ENV === 'production'
            ? 'https://tottem-api.herokuapp.com/graphql'
            : 'http://localhost:4000/graphql'

    const httpLink = createHttpLink({
        uri: graphqlUrl,
        credentials: 'same-origin',
        fetch,
    })

    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
        link: authLink.concat(httpLink),
        resolvers: {},
        cache: new InMemoryCache({
            cacheRedirects: {
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
                        return object.slug
                    default:
                        return defaultDataIdFromObject(object) // fall back to default handling
                }
            },
        }).restore(initialState),
    })
}
