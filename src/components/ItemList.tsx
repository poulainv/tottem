import React, { useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import BookCard from './Cards/BookCard'
import { Book, Item, Album } from '../types'
import AlbumCard from './Cards/AlbumCard'

const ItemList: React.FC<{ items: Item[] }> = props => {
    const size = useContext(ResponsiveContext)
    const isMobile = size === 'small'
    return (
        <Box direction="row" wrap={true} gap="medium" justify="start">
            {props.items.map((item: Item) => {
                if (item.type === 'book') {
                    const book: Book = item as Book
                    return (
                        <Box
                            key={book.title.toString()}
                            basis={isMobile ? '45%' : '25%'}
                            margin={{ vertical: 'small' }}
                        >
                            <BookCard item={book} size={size} />
                        </Box>
                    )
                } else if (item.type === 'album') {
                    const album: Album = item as Album
                    return (
                        <Box
                            key={album.title.toString()}
                            margin={{ vertical: 'small' }}
                        >
                            <AlbumCard {...album} />
                        </Box>
                    )
                }
            })}
        </Box>
    )
}

export default ItemList
