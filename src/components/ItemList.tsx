import React from 'react'
import { Box } from 'grommet'
import BookCard from './Cards/BookCard'
import { Book, Item, Album } from '../types'
import AlbumCard from './Cards/AlbumCard'

const ItemList: React.FC<{ items: Item[] }> = props => {
    return (
        <Box direction="row" justify="between">
            {props.items.map((item: Item) => {
                if ('amazonUrl' in item) {
                    const book: Book = item as Book
                    return (
                        <Box key={book.title.toString()}>
                            <BookCard {...book} />
                        </Box>
                    )
                } else if ('spotifyUrl' in item) {
                    const album: Album = item as Album
                    return (
                        <Box key={album.title.toString()}>
                            <AlbumCard {...album} />
                        </Box>
                    )
                }
            })}
        </Box>
    )
}

export default ItemList
