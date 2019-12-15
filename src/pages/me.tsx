import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import '../index.css'
import LoadingPage from '../scenes/LoadingPage'
import Inbox from '../scenes/Me/Inbox'
import { AuthenticatedUser, getUserAuth } from '../services/authentication'
import { withApollo } from '../services/lib/apollo'

const InboxPage: NextPage<{ loggedInUser?: AuthenticatedUser }> = ({
    loggedInUser,
}) => {
    return loggedInUser ? (
        <Inbox loggedInUser={loggedInUser} />
    ) : (
        <LoadingPage />
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
