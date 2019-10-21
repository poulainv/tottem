import { Box, Markdown } from 'grommet'
import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'
import ItemsCount from './ItemsCount'

const Title = styled.h1`
    margin: 0px;
    font-weight: 600;
    font-size: 34px;
    line-height: 70px;
    color: #262626;
    :first-line {
        line-height: 100% !important;
    }
`

const Subtitle = styled.h3`
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    color: #595959;
`

const Avatar = styled.img`
    border-radius: 50%;
    height: 48px;
    width: 48px;
    cursor: pointer;
`

const Owner = styled.p`
    margin: 0px;
    font-size: 14px;
    cursor: pointer;
    line-height: 22px;
    color: #262626;
`

const CreationDate = styled.p`
    margin: 0px;
    font-size: 14px;
    line-height: 22px;
    color: #8c8c8c;
`

interface ICollectionHeaderProps {
    ownerName: string
    userImage: string
    ownerSlug: string
    title: string
    subtitle?: string
    date: string
    itemsTypeCount: Array<{ type: string; count: number }>
}

const CollectionHeader: React.FunctionComponent<
    ICollectionHeaderProps
> = props => {
    const date = new Date(props.date)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return (
        <Box pad={{ horizontal: 'large' }}>
            <Title>{props.title}</Title>
            {props.subtitle && (
                <Subtitle>
                    <Markdown>{props.subtitle}</Markdown>
                </Subtitle>
            )}
            <Box
                direction="row"
                margin={{ top: 'medium' }}
                align="center"
                justify="between"
            >
                <Box direction="row">
                    <Link href="/[profile]" as={`/${props.ownerSlug}`}>
                        <Avatar src={props.userImage} />
                    </Link>
                    <Box margin={{ horizontal: 'medium' }}>
                        <Link href="/[profile]" as={`/${props.ownerSlug}`}>
                            <Owner>{props.ownerName}</Owner>
                        </Link>
                        <CreationDate>
                            {date.toLocaleDateString('en-US', options)}
                        </CreationDate>
                    </Box>
                </Box>
                <ItemsCount items={props.itemsTypeCount} />
            </Box>
        </Box>
    )
}

export default CollectionHeader
