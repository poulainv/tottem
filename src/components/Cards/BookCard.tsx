import React, { useState } from 'react'
import { Book } from '../../types'
import { Box, Heading, Image, Text, Stack, Button, Paragraph } from 'grommet'
import Truncate from 'react-truncate'
import picto from '../../static/pictograms/book.svg'
import ShadowCover from '../ShadowCover'
import styled from 'styled-components'
import DetailedCard from './DetailedCard'

const Hoverable = styled.div`
    position: relative;
`

const HoverCard = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: transparent;
    border-radius: 8px;

    :hover {
        height: 108%;
        left: -4%;
        top: -4%;
        width: 108%;
    }
`

const BookCard: React.FC<Book> = props => {
    const [isHover, setHover] = useState(false)
    return (
        <Hoverable // tslint:disable-next-line: jsx-no-lambda
            onMouseEnter={() => setHover(true)}
            // tslint:disable-next-line: jsx-no-lambda
            onMouseLeave={() => setHover(false)}
        >
            <Box
                direction="column"
                round="8px"
                elevation="card"
                align="center"
                width="166px"
            >
                <Box
                    direction="column"
                    justify="center"
                    width="132px"
                    pad={{ vertical: '17px' }}
                >
                    <Stack anchor="bottom">
                        <Box round="4px" height="206px" overflow="hidden">
                            <Image src={props.imageUrl} fit="cover" />
                        </Box>
                        {props.imageColor && (
                            <ShadowCover color={props.imageColor} />
                        )}
                    </Stack>
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
                            <Image src={picto} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <HoverCard>{isHover && <DetailedCard {...props} />}</HoverCard>
        </Hoverable>
    )
}

export default BookCard
