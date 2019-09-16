import { Box, Image } from 'grommet'
import * as React from 'react'

interface IPictureProfile {
    imageUrl: string
}

const PictureProfile: React.FC<IPictureProfile> = props => {
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
