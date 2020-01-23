import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import Profile from '../scenes/Profile'
import { withApollo } from '../services/lib/apollo'
import { getUserAuth, AuthenticatedUser } from '../services/authentication'
import Layout from '../scenes/Profile/components/Layout'

const ProfilePage: NextPage<{
    loggedInUser?: AuthenticatedUser
    profileSlug: string
}> = ({ loggedInUser, profileSlug }) => {
    return (
        <Layout loggedInUser={loggedInUser}>
            {authUserId => (
                <Profile authUserId={authUserId} profile={profileSlug} />
            )}
        </Layout>
    )
}

interface Context extends NextPageContext {
    query: {
        profile: string
    }
}

ProfilePage.getInitialProps = async (ctx: Context) => {
    const cookie = ctx.req?.headers?.cookie
    const isServer = typeof window === 'undefined'
    const profileSlug: string = ctx.query.profile.toLowerCase()
    return {
        profileSlug,
        loggedInUser: getUserAuth(isServer, cookie),
    }
}

export default withApollo(ProfilePage)
