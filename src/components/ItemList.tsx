import React from 'react'
import { Box } from 'grommet'
import BookCard from './Cards/BookCard'
import { Book, Item } from '../types'

const ItemList: React.FC<{ items: Item[] }> = props => {
    return (
        <Box direction="row" justify="between">
            {props.items.map((item: Item) => {
                return (
                    <Box key={item.title.toString()}>
                        <BookCard {...(item as Book)} />
                    </Box>
                )
            })}
        </Box>
    )
}

export default ItemList
