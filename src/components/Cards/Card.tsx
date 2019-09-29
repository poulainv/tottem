import React, { useState } from 'react'
import { Box, Stack, Image } from 'grommet'
import styled from 'styled-components'

import CoverImage, { ImageShapeType } from './CoverImage'
import CardInfo from './CardInfo'
import DetailedCard from './DetailedCard'
import { Item, ItemType } from '../../types'

interface CardProps {
    item: Item
    small: boolean
    width: string
    imageShape: ImageShapeType
}

export const CardSize = {
    small: {
        width: '166px',
        rectangleImageHeight: '280px',
        squareImageHeight: '166px',
    },
    large: {
        width: '186px',
        rectangleImageHeight: '312px',
        squareImageHeight: '186px',
    },
}

const colors: { [type in ItemType]: string } = {
    album: '#26547C',
    book: '#26547C',
    movie: '#EF476F',
    paper: '#square',
    people: '#FFD166',
    podcast: '#square',
    video: '#EF476F',
}

const Card: React.FC<CardProps> = props => {
    const [isHover, setHover] = useState(false)
    const touchScreen = props.small
    const picto = require(`../../static/pictograms/book-white.svg`)
    return (
        <Stack anchor="top-left">
            <Box
                onMouseEnter={() => setHover(true)}
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
                    background={colors[props.item.type]}
                    width="30px"
                    height="30px"
                >
                    <Image src={picto} />
                </Box>
            )}
        </Stack>
    )
}

export default Card
