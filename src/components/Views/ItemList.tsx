import React, { useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import Card from '../Cards/Card'
import { Item, ItemType } from '../../types'
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

const ItemList: React.FC<{ items: Item[] }> = props => {
    const size = useContext(ResponsiveContext)
    return (
        <Box direction="row" wrap={true} gap="medium" justify="start">
            {props.items.map((item: Item) => {
                return (
                    <Box
                        key={item.title.toString()}
                        margin={{ vertical: 'small' }}
                    >
                        <Card
                            item={item}
                            small={size === 'small' ? true : false}
                            imageShape={imageShapes[item.type]}
                        />
                    </Box>
                )
            })}
        </Box>
    )
}

export default ItemList
