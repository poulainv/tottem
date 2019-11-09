import { Box, Image } from 'grommet'
import React from 'react'
import styled from 'styled-components'
import { CardSize } from './Card'
import { ImageShapeType } from '../../fragments/common'

interface CoverProps {
    imageUrl: string | undefined
    placeholderColor: string
    placeholderPicto: string
    imageShape?: ImageShapeType
}

const ImageBox = styled(Box)`
    height: ${(props: { imageShape?: string }) =>
        props.imageShape === 'rectangle'
            ? CardSize.large.rectangleImageHeight
            : CardSize.large.squareImageHeight};
    @media screen and (max-width: 812px) {
        height: ${(props: { imageShape?: string }) =>
            props.imageShape === 'rectangle'
                ? CardSize.small.rectangleImageHeight
                : CardSize.small.squareImageHeight};
    }
`

const CoverImage: React.FC<CoverProps> = props => {
    return (
        <ImageBox
            imageShape={props.imageShape}
            round={props.imageShape === 'circle' ? '50%' : '8px'}
            justify="center"
            width="full"
            overflow="hidden"
            border={{ color: 'light-3', size: '0.5px' }}
            background={props.placeholderColor}
        >
            {props.imageUrl ? (
                <Image
                    fallback={props.placeholderPicto}
                    src={props.imageUrl}
                    fit="cover"
                />
            ) : (
                <Image
                    src={props.placeholderPicto}
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                    alt="Pictogram"
                    fit="contain"
                    width="30px"
                    height="30px"
                />
            )}
        </ImageBox>
    )
}

export default CoverImage
