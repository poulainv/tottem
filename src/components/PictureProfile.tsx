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
            justify="center"
            align="center"
            round="full"
            elevation="profile"
        >
            <Image
                src={props.imageUrl}
                width={props.size === 'small' ? '100px' : '140px'}
                height={props.size === 'small' ? '100px' : '140px'}
            />
        </Box>
    )
}

export default PictureProfile
