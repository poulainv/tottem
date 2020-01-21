import { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import * as React from 'react'
import Collection from '../../../scenes/Me/Collection'
import Layout from '../../../scenes/Me/components/Layout'
import {
    AuthenticatedUser,
    getUserAuth,
} from '../../../services/authentication'
import { withApollo } from '../../../services/lib/apollo'

const CollectionPage: NextPage<{ loggedInUser?: AuthenticatedUser }> = ({
    loggedInUser,
}) => {
    const router = useRouter()
    return (
        <Layout loggedInUser={loggedInUser}>
            {authUserId => (
                <Collection
                    authUserId={authUserId}
                    collectionId={
                        router.query.collectionId &&
                        router.query.collectionId.toString()
                    }
                />
            )}
        </Layout>
    )
}

CollectionPage.getInitialProps = async (ctx: NextPageContext) => {
    const cookie = ctx.req?.headers?.cookie
    const isServer = typeof window === 'undefined'
    return {
        loggedInUser: getUserAuth(isServer, cookie),
    }
}

export default withApollo(CollectionPage)
