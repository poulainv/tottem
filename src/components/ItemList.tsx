import React from 'react'
import { Box } from 'grommet'
import BookCard from './Cards/bookCard'

const ItemList: React.FC = () => {
    return (
        <Box direction="row" justify="between">
            <Box>
                <BookCard />
            </Box>
        </Box>
    )
}

export default ItemList
