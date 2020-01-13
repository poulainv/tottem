import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import '../../index.css'
import LoadingPage from '../../scenes/UtilsPage/Loading'
import Settings from '../../scenes/Me/Settings'
import { AuthenticatedUser, getUserAuth } from '../../services/authentication'
import { withApollo } from '../../services/lib/apollo'
import Layout from '../../scenes/Me/components/Layout'

const SettingsPage: NextPage<{ loggedInUser?: AuthenticatedUser }> = ({
    loggedInUser,
}) => {
    return (
        <Layout loggedInUser={loggedInUser}>
            {(dispatch, authUserId) => (
                <Settings messageDispatch={dispatch} authUserId={authUserId} />
            )}
        </Layout>
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
