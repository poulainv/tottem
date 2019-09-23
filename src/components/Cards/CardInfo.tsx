import React from 'react'
import { Box, Text, Image } from 'grommet'
import Truncate from 'react-truncate'
import { Item } from '../../types'
import styled from 'styled-components'

const StyledTitle = styled(Text)`
    font-weight: 500;
`

const CardInfo: React.FC<Item> = (props: Item) => {
    const picto = require(`../../static/pictograms/${props.type}.svg`)
    return (
        <Box>
            <Box height="xxsmall" margin={{ top: 'xsmall' }} responsive={false}>
                <StyledTitle color="dark-1" size="small">
                    <Truncate lines={2}>{props.title}</Truncate>
                </StyledTitle>
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
