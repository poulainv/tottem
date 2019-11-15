import { Box, Image } from 'grommet'
import React from 'react'
import styled from 'styled-components'

interface PictureProfileProps {
    imageUrl: string
}

const ResponsiveImage = styled(Image)`
    width: 150px;
    height: 150px;
    @media screen and (max-width: 812px) {
        width: 80px;
        height: 80px;
    }
`

const PictureProfile: React.FC<PictureProfileProps> = props => {
    return (
        <Box
            overflow="hidden"
            justify="center"
            align="center"
            round="full"
            elevation="profile"
        >
            <ResponsiveImage src={props.imageUrl} />
        </Box>
    )
}

export default PictureProfile
