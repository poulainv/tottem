import { Box, Image, Stack } from 'grommet'
import React, { useState } from 'react'
import styled from 'styled-components'
import { brand600, colorPlaceholders } from '../../constants/colors'
import { ImageShapeType, Item } from '../../types'
import CardInfo from './CardInfo'
import CoverImage from './CoverImage'

interface CardProps {
    item: Item
    imageShape: ImageShapeType
}

const width = 18 + 8 * 18
const smallWidth = width * 0.8

export const CardSize = {
    small: {
        widthInNumber: smallWidth,
        width: smallWidth + 'px',
        rectangleImageHeight: 1.5 * smallWidth + 'px',
        squareImageHeight: smallWidth + 'px',
    },
    large: {
        widthInNumber: width,
        width: width + 'px',
        rectangleImageHeight: 1.5 * width + 'px',
        squareImageHeight: width + 'px',
    },
}

const CardBox = styled(Box)`
    width: ${CardSize.large.width};
    @media screen and (max-width: 812px) {
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
                    placeholderColor={colorPlaceholders[props.item.type]}
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
                    background={brand600}
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
