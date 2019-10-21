import { Box } from 'grommet'
import { NextPage, NextPageContext } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import * as React from 'react'
import removeMd from 'remove-markdown'
import CollectionHeader from '../../../components/Collection/Header'
import ItemList from '../../../components/Collection/ItemList'
import { Layout } from '../../../components/Views/Layout'
import { ICollection, ISection, UserProfile, Item } from '../../../types'

const countBy = require('lodash.countby')

interface ICollectionProps {
    userProfile: UserProfile
    collection: ICollection
}

const Collection: NextPage<ICollectionProps> = ({
    userProfile,
    collection,
}) => {
    const router = useRouter()
    const collectionName = removeMd(collection.name)
    const itemsTypeCount = countBy(collection.items, (x: Item) => x.type)

    return (
        <Layout>
            <NextSeo
                title={`${collectionName} - ${userProfile.firstname} - Tottem`}
                description={`${collectionName} collection of ${userProfile.firstname} - Tottem is place where enthusiastic people and organizations share relevant collections of hand-picked items — books, articles, movies and more`}
                openGraph={{
                    description: `${collection.name} collection of ${userProfile.firstname} - Tottem is place where enthusiastic people and organizations share relevant collections of hand-picked items — books, articles, movies and more`,
                    url: `https://tottem.app/${router.query.profile}/collection/${collection.id}`,
                    site_name: 'Tottem',
                    images: [
                        {
                            url: `https://`, // FIXME profile image
                        },
                    ],
                }}
            />
            <Box margin={{ top: 'large' }} width="xlarge">
                <CollectionHeader
                    ownerName={userProfile.firstname}
                    userImage={userProfile.pictureUrl}
                    title={collectionName}
                    subtitle={collection.detail || ' '}
                    date={collection.date.toString()}
                    ownerSlug={userProfile.slug}
                    itemsTypeCount={itemsTypeCount}
                />
                <ItemList items={collection.items} />
            </Box>
        </Layout>
    )
}

interface Context extends NextPageContext {
    query: {
        profile: string
        collectionId: string
    }
}

Collection.getInitialProps = async (context: Context) => {
    // Get url query
    const profile: string = context.query.profile
    const collectionId: string = context.query.collectionId

    // Fetch data
    const userProfile: UserProfile = require(`../../../data/${profile}/profile`)
        .default
    const sections: ISection[] = require(`../../../data/${profile}/sections`)
        .default
    const collectionOpt: ICollection | undefined = sections
        .flatMap(x => x.collections)
        .find((x: ICollection) => x.id === collectionId)

    // FIXME use type check and _error to handle that
    let collection: ICollection
    if (!collectionOpt) {
        throw Error('Collection not found')
    } else {
        collection = collectionOpt
    }
    return { userProfile, collection }
}

export default Collection
