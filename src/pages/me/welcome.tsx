import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import Layout from '../../scenes/Me/components/Layout'
import Welcome from '../../scenes/Me/Welcome'
import { AuthenticatedUser, getUserAuth } from '../../services/authentication'
import { withApollo } from '../../services/lib/apollo'

const WelcomePage: NextPage<{ loggedInUser?: AuthenticatedUser }> = ({
    loggedInUser,
}) => {
    return <Layout loggedInUser={loggedInUser}>{_ => <Welcome />}</Layout>
}

WelcomePage.getInitialProps = async (ctx: NextPageContext) => {
    const cookie = ctx.req?.headers?.cookie
    const isServer = typeof window === 'undefined'
    return {
        loggedInUser: getUserAuth(isServer, cookie),
    }
}

export default withApollo(WelcomePage)
