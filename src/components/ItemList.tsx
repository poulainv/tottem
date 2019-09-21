import React, { useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import Card from './Cards/Card'
import { Book, Item, Album, Movie } from '../types'

const ItemList: React.FC<{ items: Item[] }> = props => {
    const size = useContext(ResponsiveContext)
    const isMobile = size === 'small'
    return (
        <Box direction="row" wrap={true} gap="medium" justify="start">
            {props.items.map((item: Item) => {
                let boxCard
                switch (item.type) {
                    case 'book':
                        const book: Book = item as Book
                        boxCard = (
                            <Box
                                key={book.title.toString()}
                                basis={isMobile ? '45%' : '25%'}
                                margin={{ vertical: 'small' }}
                            >
                                <Card item={book} size={size} hoverable />
                            </Box>
                        )
                        break
                    case 'album':
                        const album: Album = item as Album
                        boxCard = (
                            <Box
                                key={album.title.toString()}
                                margin={{ vertical: 'small' }}
                            >
                                <Card
                                    item={album}
                                    size={size}
                                    imageShape="square"
                                />
                            </Box>
                        )
                        break
                    case 'movie':
                        const movie: Movie = item as Movie
                        boxCard = (
                            <Box
                                key={movie.title.toString()}
                                margin={{ vertical: 'small' }}
                            >
                                <Card item={movie} size={size} />
                            </Box>
                        )
                        break
                    case 'paper':
                        const article: Item = item as Item
                        boxCard = (
                            <Box
                                key={article.title.toString()}
                                margin={{ vertical: 'small' }}
                            >
                                <Card
                                    item={article}
                                    size={size}
                                    imageShape="square"
                                />
                            </Box>
                        )
                        break
                    case 'people':
                        const people: Item = item as Item
                        boxCard = (
                            <Box
                                key={people.title.toString()}
                                margin={{ vertical: 'small' }}
                            >
                                <Card
                                    item={people}
                                    size={size}
                                    imageShape="circle"
                                />
                            </Box>
                        )
                        break
                    case 'podcast':
                        const podcast: Item = item as Item
                        boxCard = (
                            <Box
                                key={podcast.title.toString()}
                                margin={{ vertical: 'small' }}
                            >
                                <Card
                                    item={podcast}
                                    size={size}
                                    imageShape="square"
                                />
                            </Box>
                        )
                        break
                }
                return boxCard
            })}
        </Box>
    )
}

export default ItemList
