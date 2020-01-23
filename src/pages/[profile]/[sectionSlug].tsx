import * as React from 'react'
import Profile from '../../scenes/Profile'
import { withApollo } from '../../services/lib/apollo'
import { getUserAuth, AuthenticatedUser } from '../../services/authentication'
import Layout from '../../scenes/Profile/components/Layout'
import { NextPageContext, NextPage } from 'next'

const ProfilePage: NextPage<{
    loggedInUser?: AuthenticatedUser
    sectionSlug: string
    profileSlug: string
}> = ({ loggedInUser, profileSlug, sectionSlug }) => {
    const sectionId = sectionSlug.split('-').slice(-1)[0]
    return (
        <Layout loggedInUser={loggedInUser}>
            {authUserId => (
                <Profile
                    authUserId={authUserId}
                    profile={profileSlug}
                    activeSectionId={sectionId}
                />
            )}
        </Layout>
    )
}
interface Context extends NextPageContext {
    query: {
        profile: string
        sectionSlug: string
    }
}
ProfilePage.getInitialProps = async (ctx: Context) => {
    const cookie = ctx.req?.headers?.cookie
    const isServer = typeof window === 'undefined'
    const profileSlug: string = ctx.query.profile.toLowerCase()
    const sectionSlug: string = ctx.query.sectionSlug
    return {
        profileSlug,
        sectionSlug,
        loggedInUser: getUserAuth(isServer, cookie),
    }
}

export default withApollo(ProfilePage)
