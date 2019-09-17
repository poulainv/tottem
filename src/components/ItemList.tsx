import React from 'react'
import { Box } from 'grommet'
import { Book, Item, Album, CollectionType, Movie } from '../types'
import Card from './Cards/Card'

const ItemList: React.FC<{ items: Item[]; type: CollectionType }> = props => {
    return (
        <Box direction="row" wrap={true} gap="medium" justify="between">
            {(() => {
                switch (props.type) {
                    case 'albums':
                        return props.items.map((item: Item) => {
                            // TODO instantiate new class object here maybe?
                            const album: Album = item as Album
                            return (
                                <Box
                                    key={album.title.toString()}
                                    margin={{ vertical: 'small' }}
                                >
                                    <Card {...album} />
                                </Box>
                            )
                        })
                    case 'books':
                        return props.items.map((item: Item) => {
                            const book: Book = item as Book
                            book.size = 'big'
                            return (
                                <Box
                                    key={book.title.toString()}
                                    margin={{ vertical: 'small' }}
                                >
                                    <Card {...book} />
                                </Box>
                            )
                        })
                    case 'movies':
                        return props.items.map((item: Item) => {
                            const movie: Movie = item as Movie
                            movie.size = 'big'
                            return (
                                <Box
                                    key={movie.title.toString()}
                                    margin={{ vertical: 'small' }}
                                >
                                    <Card {...movie} />
                                </Box>
                            )
                        })
                }
            })()}
            {}
        </Box>
    )
}

export default ItemList
