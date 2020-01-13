import { ApolloProvider } from '@apollo/react-hooks'
import { defaultDataIdFromObject, InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import React from 'react'
import { auth0, getAccessToken } from '../authentication'
import { handleGraphQLErrors } from '../errors'
import typeDefs from '../../localSchema.gql'

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
            const apolloClient = (ctx.apolloClient = initApolloClient(
                {},
                ctx.req?.headers?.cookie
            ))

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
function initApolloClient(initialState, cookie = '') {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (typeof window === 'undefined') {
        return createApolloClient(initialState, cookie)
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
const authLinkFromCookie = cookie =>
    setContext((_, { headers }) => {
        const isServer = typeof window === 'undefined'

        const shouldRenew = isServer
            ? false
            : auth0.isLoggedIn() && auth0.isExpired()

        let promise
        if (shouldRenew) {
            // access token needs to be renew on client side
            promise = auth0.renewSession()
        } else {
            const accessToken = getAccessToken(isServer, cookie)
            promise = Promise.resolve(accessToken)
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

const errorLink = onError(handleGraphQLErrors)

function createApolloClient(initialState = {}, cookie = '') {
    const httpLink = createHttpLink({
        uri: process.env.GRAPHQL_URL,
        credentials: 'same-origin',
        fetch,
    })

    const links = ApolloLink.from([
        authLinkFromCookie(cookie),
        errorLink,
        httpLink,
    ])

    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
        link: links,
        typeDefs: typeDefs,
        resolvers: {},
        cache: new InMemoryCache({
            cacheRedirects: {
                // FIXME We do want composite keys that will be supported in Apollo Client V3
                Query: {
                    // Allow query to get cache (partial)
                    collection: (_, args, { getCacheKey }) => {
                        return getCacheKey({
                            __typename: 'Collection',
                            slug: args.where.id,
                        })
                    },
                },
            },
            dataIdFromObject: object => {
                switch (object.__typename) {
                    case 'Collection':
                        return `Collection:${object.slug &&
                            object.slug.split('-').reverse()[0]}`
                    default:
                        return defaultDataIdFromObject(object) // fall back to default handling
                }
            },
        }).restore(initialState),
    })
}
