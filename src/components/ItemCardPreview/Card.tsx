import { Box, Image, Stack } from 'grommet'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'
import { brand600, colorPlaceholders } from '../../constants/colors'
import { ImageShapeType } from '../../scenes/common'
import CardImage from './CardImage'
import CardInfo from './CardInfo'
import { ItemPreviewFragment } from '../../generated/types'

interface CardProps {
    item: ItemPreviewFragment
    imageShape: ImageShapeType
    collectionId: string
}

const width = 18 + 8 * 18
const smallWidth = width * 0.8

export const CardSize = {
    small: {
        widthInNumber: smallWidth,
        width: smallWidth + 'px',
        rectangleImageHeight: 1.65 * smallWidth + 'px',
        squareImageHeight: smallWidth + 'px',
    },
    large: {
        widthInNumber: width,
        width: width + 'px',
        rectangleImageHeight: 1.65 * width + 'px',
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
    const router = useRouter()
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
                <Link
                    href="/[profile]/collection/[collectionId]"
                    as={`/${router.query.profile}/collection/${props.collectionId}#${props.item.id}`}
                >
                    <a>
                        <CardImage
                            placeholderColor={
                                colorPlaceholders[props.item.type]
                            }
                            placeholderPicto={picto}
                            imageUrl={props.item.imageUrl}
                            imageShape={props.imageShape}
                        />
                    </a>
                </Link>
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
