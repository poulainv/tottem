import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import '../../index.css'
import LoadingPage from '../../scenes/UtilsPage/Loading'
import Settings from '../../scenes/Me/Settings'
import { AuthenticatedUser, getUserAuth } from '../../services/authentication'
import { withApollo } from '../../services/lib/apollo'

const SettingsPage: NextPage<{ loggedInUser?: AuthenticatedUser }> = ({
    loggedInUser,
}) => {
    return loggedInUser ? (
        <Settings loggedInUser={loggedInUser} />
    ) : (
        <LoadingPage />
    )
}

SettingsPage.getInitialProps = async (ctx: NextPageContext) => {
    const cookie = ctx.req?.headers?.cookie
    const isServer = typeof window === 'undefined'
    return {
        loggedInUser: getUserAuth(isServer, cookie),
    }
}

export default withApollo(SettingsPage)
