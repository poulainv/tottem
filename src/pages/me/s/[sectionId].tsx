import { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import * as React from 'react'
import LoadingPage from '../../../scenes/LoadingPage'
import Section from '../../../scenes/Me/Section'
import {
    AuthenticatedUser,
    getUserAuth,
} from '../../../services/authentication'
import { withApollo } from '../../../services/lib/apollo'
import '../../../index.css'

const SectionPage: NextPage<{ loggedInUser?: AuthenticatedUser }> = ({
    loggedInUser,
}) => {
    const router = useRouter()
    return loggedInUser ? (
        <Section
            loggedInUser={loggedInUser}
            sectionId={
                router.query.sectionId && router.query.sectionId.toString()
            }
        />
    ) : (
        <LoadingPage />
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
