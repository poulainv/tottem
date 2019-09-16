import { Box, Image } from 'grommet'
import React from 'react'

const PictureProfile: React.FC<{ imageUrl: string }> = props => {
    return (
        <Box
            overflow="hidden"
            width="172px"
            height="172px"
            justify="center"
            align="center"
            round="full"
        >
            <Image src={props.imageUrl} width="100%" />
        </Box>
    )
}

export default PictureProfile
