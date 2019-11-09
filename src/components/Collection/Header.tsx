import { Box, Markdown, Anchor } from 'grommet'
import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import ItemsCount from './ItemsCount'
import { PageHeader, PageSubheader, CreationDate, Owner } from '../Typography'
import { ItemType } from '../../fragments/common'

const Avatar = styled.img`
    border-radius: 50%;
    height: 48px;
    width: 48px;
    cursor: pointer;
`

interface ICollectionHeaderProps {
    ownerName: string
    userImage: string
    ownerSlug: string
    title: string
    subtitle?: string
    date: string
    itemsTypeCount: { [type in ItemType]: number }
}

const CollectionHeader: React.FunctionComponent<
    ICollectionHeaderProps
> = props => {
    const date = new Date(props.date)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return (
        <Box pad={{ horizontal: 'large' }}>
            <PageHeader>{props.title}</PageHeader>
            {props.subtitle && (
                <PageSubheader>
                    <Markdown>{props.subtitle}</Markdown>
                </PageSubheader>
            )}
            <Box
                direction="row"
                margin={{ top: 'medium' }}
                align="center"
                justify="between"
            >
                <Box direction="row">
                    <Link href="/[profile]" as={`/${props.ownerSlug}`} passHref>
                        <Anchor>
                            <Avatar src={props.userImage} />
                        </Anchor>
                    </Link>
                    <Box margin={{ horizontal: 'medium' }}>
                        <Link
                            href="/[profile]"
                            as={`/${props.ownerSlug}`}
                            passHref
                        >
                            <Anchor>
                                <Owner>{props.ownerName}</Owner>
                            </Anchor>
                        </Link>
                        <CreationDate>
                            {date.toLocaleDateString('fr-FR', options)}
                        </CreationDate>
                    </Box>
                </Box>
                <ItemsCount items={props.itemsTypeCount} />
            </Box>
        </Box>
    )
}

export default CollectionHeader
