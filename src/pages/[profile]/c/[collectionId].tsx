import { Box } from 'grommet'
import { NextPage, NextPageContext } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import * as React from 'react'
import removeMd from 'remove-markdown'
import CollectionHeader from '../../../components/Collection/Header'
import ItemList from '../../../components/Collection/ItemList'
import { Layout, PageBox } from '../../../components/Views/Layout'
import { ICollection, ISection, UserProfile, Item } from '../../../types'
import styled from 'styled-components'
import { LinkPrevious } from 'grommet-icons'
import Link from 'next/link'
import { getAwesomeSections } from '../../../data/awesome/sections'

const countBy = require('lodash.countby')
const flatten = require('lodash.flatten')

interface ICollectionProps {
    userProfile: UserProfile
    collection: ICollection
}

const BackButton = styled.a`
    display: flex;
    background-color: white;
    cursor: pointer;
    color: black;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0px;
    left: -32px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    @media screen and (max-width: 600px) {
        display: none;
    }
`

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
                description={`${collectionName} by ${userProfile.firstname} - Tottem`}
                twitter={{
                    site: '@TottemApp',
                    cardType: 'summary',
                }}
                openGraph={{
                    description: `${collectionName} by ${userProfile.firstname} - Tottem`,
                    url: `https://tottem.app/${router.query.profile}/c/${collection.id}`,
                    site_name: 'Tottem',
                    images: [
                        {
                            url: `https://tottem.app${userProfile.pictureUrl}`,
                        },
                    ],
                }}
            />
            <PageBox>
                <Link
                    href="/[profile]"
                    as={`/${router.query.profile}`}
                    passHref
                >
                    <BackButton>
                        <LinkPrevious
                            color="#595959"
                            style={{ margin: 'auto', display: 'block' }}
                        />
                    </BackButton>
                </Link>
                <Box width="xlarge">
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
            </PageBox>
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
    let sections: ISection[] = []
    if (profile.includes('awesome')) {
        sections = getAwesomeSections(profile)
    } else {
        sections = require(`../../../data/${profile}/sections`).default
    }
    // flatMap only on node v12
    const collectionOpt: ICollection | undefined = flatten(
        sections.map(x => x.collections)
    ).find((x: ICollection) => x.id === collectionId)
    let collection: ICollection
    if (!collectionOpt) {
        throw Error('Collection not found')
    } else {
        collection = collectionOpt
    }
    return { userProfile, collection }
}

export default Collection
