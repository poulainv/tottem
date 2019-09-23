import React, { useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import Card, { CardSize } from '../Cards/Card'
import { Item, ItemType } from '../../types'
import { ImageShapeType } from '../Cards/CoverImage'
import styled from 'styled-components'

const imageShapes: { [type in ItemType]: ImageShapeType } = {
    album: 'square',
    book: 'rectangle',
    movie: 'rectangle',
    paper: 'square',
    people: 'circle',
    podcast: 'square',
    video: 'square',
}

const StyledBox = styled(Box)`
    ::-webkit-scrollbar {
        display: none;
    }
`

const ItemList: React.FC<{ items: Item[] }> = props => {
    const size = useContext(ResponsiveContext)
    const isMobile = size === 'small'
    return (
        <StyledBox
            direction="row"
            wrap={!isMobile}
            gap="large"
            pad={{
                horizontal: 'medium',
                bottom: 'large',
            }}
            justify="start"
            overflow={{ horizontal: isMobile ? 'auto' : 'visible' }}
        >
            {props.items.map((item: Item) => {
                return (
                    <Box
                        key={item.title.toString()}
                        margin={{ vertical: 'small' }}
                        width={{
                            min: isMobile
                                ? CardSize.small.width
                                : CardSize.large.width,
                        }}
                    >
                        <Card
                            width={
                                isMobile
                                    ? CardSize.small.width
                                    : CardSize.large.width
                            }
                            item={item}
                            small={isMobile}
                            imageShape={imageShapes[item.type]}
                        />
                    </Box>
                )
            })}
        </StyledBox>
    )
}

export default ItemList
