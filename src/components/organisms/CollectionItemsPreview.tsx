import { Box } from 'grommet'
import React from 'react'
import styled from 'styled-components'
import Card, { CardSize } from '../molecules/Card'
import { Item } from '../../fragments/profile'
import { imageShapes } from '../../fragments/common'

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

const ItemList: React.FC<{ items: Item[]; collectionId: string }> = props => {
    return (
        <ScrollableBox
            responsive={false}
            direction="row"
            pad={{ horizontal: 'medium', bottom: 'medium' }}
            justify="start"
            align="start"
        >
            {props.items.map((item: Item, index: number) => {
                return (
                    <ItemCardBox
                        align="center"
                        pad={{ top: 'large' }}
                        key={item.title.toString()}
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

export default ItemList
