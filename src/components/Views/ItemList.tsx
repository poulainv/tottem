import { Box } from 'grommet'
import React from 'react'
import styled from 'styled-components'
import { Item, ItemType } from '../../types'
import Card, { CardSize } from '../Cards/Card'
import { ImageShapeType } from '../Cards/CoverImage'

const imageShapes: { [type in ItemType]: ImageShapeType } = {
    album: 'square',
    book: 'rectangle',
    movie: 'rectangle',
    paper: 'square',
    people: 'circle',
    podcast: 'square',
    video: 'square',
}

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
    display: ${(props: { show: boolean }) => (props.show ? 'flex' : 'none')};
    @media screen and (max-width: 812px) {
        margin-right: 45px;
        display: 'block';
        min-width: ${CardSize.small.width};
        flex-basis: none;
    }
`

const ItemList: React.FC<{ items: Item[]; expanded: boolean }> = props => {
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
                        show={props.expanded || index < 4}
                        align="center"
                        pad={{ top: 'large' }}
                        key={item.title.toString()}
                        animation={
                            index >= 4
                                ? { duration: 250, type: 'slideDown' }
                                : undefined
                        }
                    >
                        <Card item={item} imageShape={imageShapes[item.type]} />
                    </ItemCardBox>
                )
            })}
        </ScrollableBox>
    )
}

export default ItemList
