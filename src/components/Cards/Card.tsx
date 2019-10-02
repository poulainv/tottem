import React, { useState } from 'react'
import { Box, Stack, Image } from 'grommet'

import CoverImage, { ImageShapeType } from './CoverImage'
import CardInfo from './CardInfo'
import { Item, ItemType } from '../../types'

interface CardProps {
    item: Item
    small: boolean
    width: string
    imageShape: ImageShapeType
}

const width = 18 + 8 * 19
const largeWidthPx = width + 'px'
const largeHeightPx = 1.68 * width + 'px'
const smallWidthPx = width * 0.8 + 'px'
const smallHeightPx = 1.68 * width * 0.8 + 'px'

export const CardSize = {
    small: {
        width: smallWidthPx,
        rectangleImageHeight: smallHeightPx,
        squareImageHeight: smallWidthPx,
    },
    large: {
        width: largeWidthPx,
        rectangleImageHeight: largeHeightPx,
        squareImageHeight: largeWidthPx,
    },
}

const colors: { [type in ItemType]: string } = {
    album: '#417D6F',
    book: '#D87551',
    movie: '#7CB7A9',
    paper: '#509DAD',
    people: '#9E4A77',
    podcast: '#E7A704',
    video: '#4D6892',
}

const Card: React.FC<CardProps> = props => {
    const [isHover, setHover] = useState(false)
    const picto = require(`../../static/pictograms/${props.item.type}-white.svg`)
    return (
        <Stack anchor="top-left">
            <Box
                // tslint:disable-next-line: jsx-no-lambda
                onMouseEnter={() => setHover(true)}
                // tslint:disable-next-line: jsx-no-lambda
                onMouseLeave={() => setHover(false)}
                direction="column"
                align="center"
                width={props.width}
                background="white"
            >
                <Box direction="column" width="full">
                    <CoverImage
                        imageUrl={props.item.imageUrl}
                        small={props.small}
                        imageShape={props.imageShape}
                    />
                    <CardInfo item={props.item} hover={isHover} />
                </Box>
            </Box>
            {picto && (
                <Box
                    style={{
                        top: '-12px',
                        left: '-12px',
                        position: 'relative',
                    }}
                    align="center"
                    justify="center"
                    round="50%"
                    background="#6FAA9C"
                    width="30px"
                    height="30px"
                >
                    <Image height="16px" src={picto} />
                </Box>
            )}
        </Stack>
    )
}

export default Card
