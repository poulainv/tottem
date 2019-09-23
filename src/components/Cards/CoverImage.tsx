import React from 'react'
import { Box, Image } from 'grommet'

export type ImageShapeType = 'rectangle' | 'square' | 'circle'

interface CoverProps {
    imageUrl: string
    imageColor?: string
    small: boolean
    imageShape?: ImageShapeType
}

const CoverImage: React.FC<CoverProps> = props => {
    // FIXME

    const getImageHeight = (small: boolean, shape?: ImageShapeType) => {
        // The width is full and fixed depending on parent width
        if (shape === 'rectangle' && !small) {
            return '210px'
        } else if (shape === 'rectangle' && small) {
            return '210px'
        } else if (small) {
            return '142px'
        } else {
            return '142px'
        }
    }

    return (
        <Box
            round={props.imageShape === 'circle' ? '50%' : '4px'}
            height={getImageHeight(props.small, props.imageShape)}
            justify="center"
            width="full"
            overflow="hidden"
        >
            <Image src={props.imageUrl} fit="cover" />
        </Box>
    )
}

export default CoverImage
