import { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import * as React from 'react'
import LoadingPage from '../../../scenes/LoadingPage'
import Collection from '../../../scenes/Me/Collection'
import {
    AuthenticatedUser,
    getUserAuth,
} from '../../../services/authentication'
import { withApollo } from '../../../services/lib/apollo'
import '../../../index.css'

const CollectionPage: NextPage<{ loggedInUser?: AuthenticatedUser }> = ({
    loggedInUser,
}) => {
    const router = useRouter()
    return loggedInUser ? (
        <Collection
            loggedInUser={loggedInUser}
            collectionId={
                router.query.collectionId &&
                router.query.collectionId.toString()
            }
        />
    ) : (
        <LoadingPage />
    )
}

CollectionPage.getInitialProps = async (ctx: NextPageContext) => {
    const cookie = ctx.req?.headers?.cookie
    const isServer = typeof window === 'undefined'
    return {
        loggedInUser: getUserAuth(isServer, cookie),
    }
}

export default withApollo(CollectionPage)
