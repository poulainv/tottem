import { Box } from 'grommet'
import { LinkPrevious } from 'grommet-icons'
import countBy from 'lodash.countby'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import * as React from 'react'
import removeMd from 'remove-markdown'
import styled from 'styled-components'
import { StyledButton } from '../../../components/Button'
import { Layout, PageBox } from '../../../components/Layout'
import { ItemType } from '../../common'
import { useAuthUser } from '../../../services/authentication'
import ItemList, { ItemListPlaceholder } from '../ItemList'
import Headers from './CollectionHeader'
import { useCollection } from './hooks'
import Loading from '../../LoadingPage'
import { Item } from '../../../generated/types'

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

export default ({
    profile,
    collectionId,
}: {
    profile: string
    collectionId: string
}) => {
    const userAuth = useAuthUser()
    const { data } = useCollection(profile, collectionId)

    if (
        data === undefined ||
        data.collection === null ||
        data.collection === undefined ||
        data.user === null ||
        data.user === undefined
    ) {
        return <Loading />
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
                    url: `https://tottem.app/${profile}/collection/${collection.slug}`,
                    site_name: 'Tottem',
                    images: [
                        {
                            url: `https://tottem.app${user.pictureUrl}`,
                        },
                    ],
                }}
            />
            <PageBox>
                {collection.section && (
                    <Link
                        href="/[profile]/[sectionId]"
                        as={`/${profile}/${collection.section.slug}`}
                        passHref
                    >
                        <BackButton>
                            <LinkPrevious
                                color="#595959"
                                style={{ margin: 'auto', display: 'block' }}
                            />
                        </BackButton>
                    </Link>
                )}
                <Box width="xlarge">
                    <Headers
                        ownerName={user.firstname}
                        userImage={user.pictureUrl}
                        title={collectionName}
                        subtitle={collection.detail || ' '}
                        createdAt={collection.createdAt.toString()}
                        ownerSlug={user.slug}
                        itemsTypeCount={
                            itemsTypeCount as { [type in ItemType]: number }
                        }
                    />
                    {userAuth && (
                        <Box
                            pad={{ horizontal: 'large', top: 'small' }}
                            direction="row"
                            justify="end"
                        >
                            <Link
                                href="/w/c/[collectionId]"
                                as={`/w/c/${collection.id}`}
                            >
                                <a>
                                    <StyledButton>Modifier</StyledButton>
                                </a>
                            </Link>
                        </Box>
                    )}
                    {collection.items === undefined ? (
                        <ItemListPlaceholder />
                    ) : (
                        <ItemList items={collection.items} />
                    )}
                </Box>
            </PageBox>
        </Layout>
    )
}
