import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import '../../index.css'
import LoadingPage from '../../scenes/LoadingPage'
import Profile from '../../scenes/Me/Profile'
import { AuthenticatedUser, getUserAuth } from '../../services/authentication'
import { withApollo } from '../../services/lib/apollo'
import { useGetUserByAuthIdQuery } from '../../generated/types'

const ProfilePage: NextPage<{ loggedInUser?: AuthenticatedUser }> = ({
    loggedInUser,
}) => {
    if (!loggedInUser) {
        return <LoadingPage />
    }
    const { data, loading } = useGetUserByAuthIdQuery({
        variables: { authId: loggedInUser.id },
    })

    return data !== undefined && data.user && !loading ? (
        <Profile loggedInUser={loggedInUser} slug={data.user.slug} />
    ) : (
        <LoadingPage />
    )
}

ProfilePage.getInitialProps = async (ctx: NextPageContext) => {
    const cookie = ctx.req?.headers?.cookie
    const isServer = typeof window === 'undefined'

    return {
        loggedInUser: getUserAuth(isServer, cookie),
    }
}

export default withApollo(ProfilePage)
