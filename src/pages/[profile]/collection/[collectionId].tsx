import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import { withApollo } from '../../../lib/apollo'
import CollectionDetails from '../../../scenes/Collection/DetailsPage'

interface ICollectionProps {
    profile: string
    collectionId: string
}

const CollectionNextPage: NextPage<ICollectionProps> = ({
    profile,
    collectionId,
}) => {
    return <CollectionDetails profile={profile} collectionId={collectionId} />
}

interface Context extends NextPageContext {
    query: {
        profile: string
        collectionId: string
    }
}

CollectionNextPage.getInitialProps = async (context: Context) => {
    const profile: string = context.query.profile
    const collectionId: string = context.query.collectionId
    return { profile, collectionId }
}

export default withApollo(CollectionNextPage)
