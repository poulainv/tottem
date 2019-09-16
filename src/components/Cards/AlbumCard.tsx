import React from 'react'
import { Album } from '../../types'
import { Box, Heading, Image, Text, Stack } from 'grommet'
import Truncate from 'react-truncate'
import picto from '../../static/pictograms/album.svg'
import ShadowCover from '../ShadowCover'

const AlbumCard: React.FC<Album> = props => {
    return (
        <Box
            direction="column"
            round="8px"
            elevation="card"
            align="center"
            width="166px"
        >
            <Box
                direction="column"
                justify="center"
                width="132px"
                pad={{ vertical: '17px' }}
            >
                <Stack anchor="bottom">
                    <Box
                        round="4px"
                        width="132px"
                        height="132px"
                        overflow="hidden"
                    >
                        <Image src={props.imageUrl} fit="cover" width="100%" />
                    </Box>
                    <ShadowCover color={props.imageColor} />
                </Stack>
                <Box
                    height={{ max: '40px' }}
                    overflow="hidden"
                    justify="center"
                    margin={{ top: 'small' }}
                >
                    <Heading
                        level={3}
                        size="medium"
                        color="dark-1"
                        margin={{ top: '0px', bottom: '8px' }}
                    >
                        <Truncate lines={1}>{props.title}</Truncate>
                    </Heading>
                </Box>
                <Box direction="row" justify="between">
                    <Box>
                        <Text color="dark-3" size="xsmall" truncate>
                            {props.author}
                        </Text>
                    </Box>
                    <Box>
                        <Image src={picto} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AlbumCard
