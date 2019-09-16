import React from 'react'
import { Book } from '../../types'
import { Box, Heading, Image, Text } from 'grommet'
import Truncate from 'react-truncate'

const bookUrl = require('../../static/images/books/patagonia.jpg')
const bookPicto = require('../../static/pictograms/book.svg')

const BookCard: React.FC<Book> = props => {
    return (
        <Box
            direction="column"
            round="8px"
            elevation="small"
            align="center"
            width="166px"
        >
            <Box
                direction="column"
                justify="center"
                width="132px"
                pad={{ vertical: 'small' }}
            >
                <Box round="4px" width="132px" height="186px" overflow="hidden">
                    {<Image src={props.imageUrl} fit="cover" width="100%" />}
                </Box>
                <Box
                    height={{ max: '40px' }}
                    overflow="hidden"
                    margin={{ top: 'small', bottom: 'xsmall' }}
                >
                    <Heading
                        level={3}
                        size="medium"
                        color="dark-1"
                        margin={{ top: '0px' }}
                    >
                        <Truncate lines={2}>{props.title}</Truncate>
                    </Heading>
                </Box>
                <Box direction="row" justify="between">
                    <Box>
                        <Text color="dark-3" size="xsmall" truncate>
                            {props.author}
                        </Text>
                    </Box>
                    <Box>
                        <Image src={bookPicto} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default BookCard
