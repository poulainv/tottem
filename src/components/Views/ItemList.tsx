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
    const isMobile = size !== 'large'
    return (
        <StyledBox
            responsive={false}
            direction="row"
            wrap={!isMobile}
            pad={{ horizontal: 'medium' }}
            gap={isMobile ? 'large' : 'none'}
            justify="start"
            align="end"
            overflow={{ horizontal: isMobile ? 'auto' : 'visible' }}
        >
            {props.items.map((item: Item) => {
                return (
                    <Box
                        basis={isMobile ? 'none' : '25%'}
                        align="center"
                        fill="vertical"
                        margin={{ top: 'large' }}
                        key={item.title.toString()}
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
