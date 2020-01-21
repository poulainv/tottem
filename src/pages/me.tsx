import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import Inbox from '../scenes/Me/Inbox'
import { AuthenticatedUser, getUserAuth } from '../services/authentication'
import { withApollo } from '../services/lib/apollo'
import Layout from '../scenes/Me/components/Layout'

const InboxPage: NextPage<{ loggedInUser?: AuthenticatedUser }> = ({
    loggedInUser,
}) => {
    return (
        <Layout loggedInUser={loggedInUser}>
            {authUserId => <Inbox authUserId={authUserId} />}
        </Layout>
    )
}

InboxPage.getInitialProps = async (ctx: NextPageContext) => {
    const cookie = ctx.req?.headers?.cookie
    const isServer = typeof window === 'undefined'
    return {
        loggedInUser: getUserAuth(isServer, cookie),
    }
}

export default withApollo(InboxPage)
