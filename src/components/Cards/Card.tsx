import { Box, Image, Stack } from 'grommet'
import React, { useState } from 'react'
import { Item, ItemType } from '../../types'
import CardInfo from './CardInfo'
import { ItemCardBox } from '../Views/ItemList'
import CoverImage, { ImageShapeType } from './CoverImage'
import styled from 'styled-components'

interface CardProps {
    item: Item
    imageShape: ImageShapeType
}

const width = 18 + 8 * 18
const smallWidth = width * 0.8
const largeWidthPx = width + 'px'
const largeHeightPx = 1.68 * width + 'px'
const smallWidthPx = smallWidth + 'px'
const smallHeightPx = 1.68 * smallWidth + 'px'

export const CardSize = {
    small: {
        widthInNumber: smallWidth,
        width: smallWidthPx,
        rectangleImageHeight: smallHeightPx,
        squareImageHeight: smallWidthPx,
    },
    large: {
        widthInNumber: width,
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

const CardBox = styled(Box)`
    width: ${CardSize.large.width};
    @media screen and (max-width: 600px) {
        width: ${CardSize.small.width};
    }
`

const Card: React.FC<CardProps> = props => {
    const [isHover, setHover] = useState(false)
    const picto = `/pictograms/${props.item.type}-white.svg`
    return (
        <Stack anchor="top-left">
            <CardBox
                // tslint:disable-next-line: jsx-no-lambda
                onMouseEnter={() => setHover(true)}
                // tslint:disable-next-line: jsx-no-lambda
                onMouseLeave={() => setHover(false)}
                direction="column"
                background="white"
            >
                <CoverImage
                    placeholderColor={colors[props.item.type]}
                    placeholderPicto={picto}
                    imageUrl={props.item.imageUrl}
                    imageShape={props.imageShape}
                />
                <CardInfo item={props.item} hover={isHover} />
            </CardBox>
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
