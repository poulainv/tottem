import React from 'react'
import { Box } from 'grommet'
import BookCard from './Cards/BookCard'
import books from '../data/books'
import { Book } from '../types'

const ItemList: React.FC = () => {
    return (
        <Box direction="row" justify="between">
            {books.map((book: Book) => {
                return (
                    <Box key={book.title.toString()}>
                        <BookCard {...book} />
                    </Box>
                )
            })}
        </Box>
    )
}

export default ItemList
