import React, { useState } from 'react'
import { Box } from 'grommet'
import styled from 'styled-components'

import CoverImage, { ImageShapeType } from './CoverImage'
import CardInfo from './CardInfo'
import DetailedCard from './DetailedCard'
import { Item } from '../../types'

const Hoverable = styled.div`
    position: relative;
`

const HoverCard = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 8px;
`

interface CardProps {
    item: Item
    small: boolean
    width: string
    imageShape: ImageShapeType
}

const Card: React.FC<CardProps> = props => {
    const [isHover, setHover] = useState(false)
    const touchScreen = props.small
    return (
        <Hoverable // tslint:disable-next-line: jsx-no-lambda
            onMouseEnter={() => !touchScreen && setHover(true)}
            // tslint:disable-next-line: jsx-no-lambda
            onMouseLeave={() => setHover(false)}
            // tslint:disable-next-line: jsx-no-lambda
            onClick={() => touchScreen && setHover(!isHover)}
        >
            <Box
                responsive={false}
                direction="column"
                round="8px"
                elevation="card"
                align="center"
                pad="20px"
                width={props.width}
            >
                <Box direction="column" width="full">
                    <CoverImage
                        imageColor={props.item.imageColor}
                        imageUrl={props.item.imageUrl}
                        small={props.small}
                        imageShape={props.imageShape}
                    />
                    <CardInfo {...props.item} />
                </Box>
            </Box>
            {isHover && (
                <HoverCard>
                    <DetailedCard {...props.item} />
                </HoverCard>
            )}
        </Hoverable>
    )
}

export default Card
