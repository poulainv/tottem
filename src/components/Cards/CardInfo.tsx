import React from 'react'
import { Box, Heading, Text, Image } from 'grommet'
import Truncate from 'react-truncate'
import { Item } from '../../types'

const CardInfo: React.FC<Item> = (props: Item) => {
    const picto = require(`../../static/pictograms/${props.type}.svg`)
    return (
        <Box>
            <Box
                height="36px"
                overflow="hidden"
                margin={{ top: 'small', bottom: 'xsmall' }}
            >
                <Heading
                    level={3}
                    size="xsmall"
                    color="dark-1"
                    margin={{ top: '0px' }}
                >
                    <Truncate lines={2}>{props.title}</Truncate>
                </Heading>
            </Box>
            <Box direction="row">
                <Box fill>
                    <Text color="dark-3" size="xsmall" truncate>
                        {props.author}
                    </Text>
                </Box>
                {picto && (
                    <Box margin={{ left: '5px' }}>
                        <Image src={picto} />
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default CardInfo
