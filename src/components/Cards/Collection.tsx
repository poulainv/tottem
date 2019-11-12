import { Anchor, Box, Button, Markdown, Text } from 'grommet'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { List } from 'react-content-loader'
import styled from 'styled-components'
import { brand50, brand600 } from '../../constants/colors'
import { MediumAndUp } from '../ResponsiveStyledComponent'
import { CollectionTitle } from '../Typography'
import ItemList from '../Views/ItemList'
import { ICollection } from '../../fragments/profile'

const CollectionDetail = styled(Text)`
    font-size: 16px;
    line-height: 28px;
    @media screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 24px;
    }
`

const CollectionCard = styled(Box)`
    border-radius: 6px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    @media screen and (max-width: 812px) {
        box-shadow: none;
        border-radius: 0px;
        border-top: 1px #dddddd solid;
        border-bottom: 1px #dddddd solid;
    }
`

export const CollectionPlaceHolder: React.FC = () => {
    return (
        <CollectionCard
            direction="column"
            margin={{ vertical: 'medium' }}
            background="white"
        >
            <List
                primaryColor={brand50}
                speed={5}
                height={100}
                width={600}
                style={{ padding: '48px' }}
            />
        </CollectionCard>
    )
}

const Collection: React.FC<{ data: ICollection }> = ({ data }) => {
    const router = useRouter()
    return (
        <CollectionCard
            direction="column"
            margin={{ vertical: 'medium' }}
            background="white"
        >
            <Fragment>
                <Link
                    href="/[profile]/collection/[collectionId]"
                    as={`/${router.query.profile}/collection/${data.slug}`}
                    passHref
                >
                    <Anchor>
                        <Box
                            direction="row"
                            justify="between"
                            align="center"
                            border={{
                                side: 'bottom',
                                color: 'light-3',
                                size: '0.5px',
                            }}
                            id={data.slug}
                        >
                            <Box
                                responsive={false}
                                margin={{ horizontal: 'medium' }}
                            >
                                <CollectionTitle>
                                    <Markdown>{data.name}</Markdown>
                                </CollectionTitle>
                            </Box>
                            <MediumAndUp>
                                <Box margin={{ horizontal: 'medium' }}>
                                    <Button
                                        style={{
                                            fontSize: '14px',
                                            color: brand600,
                                        }}
                                        label={`DETAILS`}
                                    />
                                </Box>
                            </MediumAndUp>
                        </Box>
                    </Anchor>
                </Link>
                <Box margin={{ bottom: 'none' }}>
                    <ItemList items={data.items} collectionId={data.slug} />
                </Box>
                {data.detail && (
                    <Box
                        border={{
                            side: 'top',
                            color: 'light-3',
                            size: '0.5px',
                        }}
                    >
                        <Box
                            margin={{
                                horizontal: 'medium',
                                vertical: 'medium',
                            }}
                        >
                            <CollectionDetail>
                                <Markdown>{data.detail}</Markdown>
                            </CollectionDetail>
                        </Box>
                    </Box>
                )}
            </Fragment>
        </CollectionCard>
    )
}

export default Collection
