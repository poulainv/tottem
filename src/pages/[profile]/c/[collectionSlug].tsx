import * as React from 'react'
import Collection from '../../../scenes/Profile/Collection'
import { withApollo } from '../../../services/lib/apollo'
import {
    getUserAuth,
    AuthenticatedUser,
} from '../../../services/authentication'
import Layout from '../../../scenes/Profile/components/Layout'
import { NextPageContext, NextPage } from 'next'

const ProfilePage: NextPage<{
    loggedInUser?: AuthenticatedUser
    collectionSlug: string
    profileSlug: string
}> = ({ loggedInUser, profileSlug, collectionSlug }) => {
    const collectionId = collectionSlug.split('-').slice(-1)[0]
    return (
        <Layout loggedInUser={loggedInUser}>
            {authUserId => (
                <Collection
                    authUserId={authUserId}
                    profileSlug={profileSlug}
                    collectionId={collectionId}
                />
            )}
        </Layout>
    )
}
interface Context extends NextPageContext {
    query: {
        profile: string
        collectionSlug: string
    }
}
ProfilePage.getInitialProps = async (ctx: Context) => {
    const cookie = ctx.req?.headers?.cookie
    const isServer = typeof window === 'undefined'
    const profileSlug: string = ctx.query.profile.toLowerCase()
    const collectionSlug: string = ctx.query.collectionSlug
    return {
        profileSlug,
        collectionSlug,
        loggedInUser: getUserAuth(isServer, cookie),
    }
}

export default withApollo(ProfilePage)
