import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Box } from 'grommet'
import { LinkPrevious } from 'grommet-icons'
import countBy from 'lodash.countby'
import { NextPage, NextPageContext } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import removeMd from 'remove-markdown'
import styled from 'styled-components'
import CollectionHeader from '../../../components/Collection/Header'
import ItemList from '../../../components/Collection/ItemList'
import { Layout, PageBox } from '../../../components/Views/Layout'
import { withApollo } from '../../../lib/apollo'
import {
    CollectionPageFragment,
    Item,
    User,
    ICollection,
} from '../../../fragments/collection'
import { ItemType } from '../../../fragments/common'

interface ICollectionProps {
    profile: string
    collectionId: string
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
const collectionQuery = gql`
    query getCollectionPage($slug: String, $collectionId: ID) {
        user(where: { slug: $slug }) {
            ...UserCollectionPage
        }
        collection(where: { id: $collectionId }) {
            ...CollectionCollectionPage
        }
    }
    ${CollectionPageFragment.collection}
    ${CollectionPageFragment.user}
`

interface CollectionQuery {
    user: User
    collection: ICollection
}

interface CollectionVars {
    slug: string
    collectionId: string
}

const Collection: NextPage<ICollectionProps> = ({ profile, collectionId }) => {
    const router = useRouter()
    const { loading, error, data } = useQuery<CollectionQuery, CollectionVars>(
        collectionQuery,
        {
            variables: {
                slug: profile,
                collectionId,
            },
        }
    )

    if (loading || data === undefined) {
        return <div>Loading</div>
    }

    const { collection, user } = data

    const collectionName = removeMd(collection.name)
    const itemsTypeCount = countBy(collection.items, (x: Item) => x.type)

    return (
        <Layout>
            <NextSeo
                title={`${collectionName} - ${user.firstname} - Tottem`}
                description={`${collectionName} by ${user.firstname} - Tottem`}
                twitter={{
                    site: '@TottemApp',
                    cardType: 'summary',
                }}
                openGraph={{
                    description: `${collectionName} by ${user.firstname} - Tottem`,
                    url: `https://tottem.app/${router.query.profile}/collection/${collection.id}`,
                    site_name: 'Tottem',
                    images: [
                        {
                            url: `https://tottem.app${user.pictureUrl}`,
                        },
                    ],
                }}
            />
            <PageBox>
                <Link
                    href="/[profile]/[sectionId]"
                    as={`/${router.query.profile}/${collection.section.id}`}
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
                        ownerName={user.firstname}
                        userImage={user.pictureUrl}
                        title={collectionName}
                        subtitle={collection.detail || ' '}
                        date={collection.date.toString()}
                        ownerSlug={user.slug}
                        itemsTypeCount={
                            itemsTypeCount as { [type in ItemType]: number }
                        }
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
    const profile: string = context.query.profile
    const collectionId: string = context.query.collectionId
    return { profile, collectionId }
}

export default withApollo(Collection)
