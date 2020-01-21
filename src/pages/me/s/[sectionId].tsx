import { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import * as React from 'react'
import Section from '../../../scenes/Me/Section'
import Layout from '../../../scenes/Me/components/Layout'
import {
    AuthenticatedUser,
    getUserAuth,
} from '../../../services/authentication'
import { withApollo } from '../../../services/lib/apollo'

const SectionPage: NextPage<{ loggedInUser?: AuthenticatedUser }> = ({
    loggedInUser,
}) => {
    const router = useRouter()
    return (
        <Layout loggedInUser={loggedInUser}>
            {authUserId => (
                <Section
                    authUserId={authUserId}
                    sectionId={
                        router.query.sectionId &&
                        router.query.sectionId.toString()
                    }
                />
            )}
        </Layout>
    )
}

SectionPage.getInitialProps = async (ctx: NextPageContext) => {
    const cookie = ctx.req?.headers?.cookie
    const isServer = typeof window === 'undefined'
    return {
        loggedInUser: getUserAuth(isServer, cookie),
    }
}

export default withApollo(SectionPage)
