import React from 'react'
import { Box, Heading, Image, Text, Stack } from 'grommet'
import Truncate from 'react-truncate'
// TODO picto should be dynamic
import picto from '../../static/pictograms/book.svg'
import { ItemType } from '../../types'
import ShadowCover from '../ShadowCover'

const Card: React.FC<ItemType> = props => {
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
                        height={props.size === 'big' ? '186px' : '132px'}
                        overflow="hidden"
                    >
                        <Image
                            src={props.imageUrl}
                            fit="cover"
                            width="100%"
                            style={{
                                borderRadius: props.roundedImg ? '50%' : '0',
                            }}
                        />
                    </Box>
                    <ShadowCover color={props.imageColor} />
                </Stack>
                <Box
                    height={{ max: '40px' }}
                    overflow="hidden"
                    margin={{ top: 'small', bottom: 'xsmall' }}
                >
                    <Heading
                        level={3}
                        size="medium"
                        color="dark-1"
                        margin={{ top: '0px' }}
                    >
                        <Truncate lines={2}>{props.title}</Truncate>
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

export default Card
