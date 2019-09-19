import React from 'react'
import { Stack, Box, Image } from 'grommet'
import ShadowCover from '../ShadowCover'

interface CoverProps {
    imageUrl: string
    imageColor?: string
    size: string
}

const CoverImage: React.FC<CoverProps> = props => {
    // FIXME
    const imageHeight = props.size === 'small' ? '230px' : '246px'
    return (
        <Stack anchor="bottom">
            <Box round="4px" height={{ max: imageHeight }} overflow="hidden">
                <Image src={props.imageUrl} fit="cover" />
            </Box>
            {props.imageColor && <ShadowCover color={props.imageColor} />}
        </Stack>
    )
}

export default CoverImage
