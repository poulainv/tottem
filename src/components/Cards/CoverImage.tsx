import React from 'react'
import { Box, Image } from 'grommet'
import { CardSize } from './Card'

export type ImageShapeType = 'rectangle' | 'square' | 'circle'

interface CoverProps {
    imageUrl: string
    small: boolean
    placeholderColor: string
    placeholderPicto: string
    imageShape?: ImageShapeType
}

const CoverImage: React.FC<CoverProps> = props => {
    const getImageHeight = (small: boolean, shape?: ImageShapeType) => {
        // The width is full and fixed depending on parent width
        if (shape === 'rectangle' && !small) {
            return CardSize.large.rectangleImageHeight
        } else if (shape === 'rectangle' && small) {
            return CardSize.small.rectangleImageHeight
        } else if (small) {
            return CardSize.small.squareImageHeight
        } else {
            return CardSize.large.squareImageHeight
        }
    }

    return (
        <Box
            round={props.imageShape === 'circle' ? '50%' : '8px'}
            height={getImageHeight(props.small, props.imageShape)}
            justify="center"
            width="full"
            overflow="hidden"
            background={props.imageUrl ? 'none' : props.placeholderColor}
        >
            {props.imageUrl ? (
                <Image src={props.imageUrl} fit="cover" />
            ) : (
                <Image
                    src={props.placeholderPicto}
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                    fit="contain"
                    width="30px"
                    height="30px"
                />
            )}
        </Box>
    )
}

export default CoverImage
