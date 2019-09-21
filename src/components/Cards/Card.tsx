import React, { useState } from 'react'
import { Book } from '../../types'
import { Box } from 'grommet'
import styled from 'styled-components'

import CoverImage from './CoverImage'
import CardInfo from './CardInfo'
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

interface CardProps {
    size: string
    item: Book
    hoverable?: boolean
    imageShape?: 'rectangle' | 'square' | 'circle'
}

const Card: React.FC<CardProps> = props => {
    const [isHover, setHover] = useState(false)
    // FIXME Can not do better for now...
    const widthCard = props.size === 'small' ? '180px' : '190px'
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
                pad="small"
                width={{ max: widthCard }}
            >
                <Box direction="column" justify="center">
                    <CoverImage
                        imageColor={props.item.imageColor}
                        imageUrl={props.item.imageUrl}
                        size={props.size}
                        imageShape={props.imageShape}
                    />
                    <CardInfo {...props.item} />
                </Box>
            </Box>
            {props.hoverable ? (
                <HoverCard>
                    {isHover && <DetailedCard {...props.item} />}
                </HoverCard>
            ) : null}
        </Hoverable>
    )
}

export default Card
