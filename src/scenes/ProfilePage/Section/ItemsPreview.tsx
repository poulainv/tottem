import { Box } from 'grommet'
import React from 'react'
import styled from 'styled-components'
import Card, { CardSize } from '../../../components/ItemCardPreview/Card'
import { imageShapes } from '../../common'
import { Item } from '../types'

const ScrollableBox = styled(Box)`
    ::-webkit-scrollbar {
        display: none;
    }
    flex-wrap: wrap;
    @media screen and (max-width: 812px) {
        flex-wrap: nowrap;
        overflow: auto;
    }
`

export const ItemCardBox = styled(Box)`
    flex-basis: 25%;
    @media screen and (max-width: 812px) {
        margin-right: 45px;
        display: 'block';
        min-width: ${CardSize.small.width};
        flex-basis: none;
    }
`

const ItemsPreview: React.FC<{
    items: Item[]
    collectionId: string
}> = props => {
    return (
        <ScrollableBox
            responsive={false}
            direction="row"
            pad={{ horizontal: 'm   edium', bottom: 'medium' }}
            justify="start"
            align="start"
        >
            {props.items.map((item: Item, index: number) => {
                return (
                    <ItemCardBox
                        align="center"
                        pad={{ top: 'large' }}
                        key={item.id}
                        animation={
                            index >= 4
                                ? { duration: 500, type: 'slideDown' }
                                : undefined
                        }
                    >
                        <Card
                            item={item}
                            imageShape={imageShapes[item.type]}
                            collectionId={props.collectionId}
                        />
                    </ItemCardBox>
                )
            })}
        </ScrollableBox>
    )
}

export default ItemsPreview
