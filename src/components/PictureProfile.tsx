import { Box, Image } from 'grommet'
import React from 'react'

interface PictureProfileProps {
    size: string
    imageUrl: string
}

const PictureProfile: React.FC<PictureProfileProps> = props => {
    return (
        <Box
            overflow="hidden"
            width={props.size === 'small' ? '100px' : '172px'}
            height={props.size === 'small' ? '100px' : '172px'}
            justify="center"
            align="center"
            round="full"
        >
            <Image src={props.imageUrl} width="100%" />
        </Box>
    )
}

export default PictureProfile
