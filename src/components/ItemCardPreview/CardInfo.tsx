import { Box, Text } from 'grommet'
import React from 'react'
import Truncate from 'react-truncate'
import styled from 'styled-components'
import { Item, ItemPreviewFragment } from '../../generated/types'

const StyledTitle = styled(Text)`
    font-weight: 500;
    font-size: 14px;
    overflow: hidden;

    @media screen and (max-width: 600px) {
        font-size: 13px;
    }
`

const StyledAuthor = styled(Text)`
    font-size: 14px;

    @media screen and (max-width: 600px) {
        font-size: 13px;
    }
`

interface CardInfoProps {
    item: ItemPreviewFragment
    hover: boolean
}

const CardInfo: React.FC<CardInfoProps> = (props: CardInfoProps) => {
    return (
        <Box height="84px">
            <Box
                height={{ max: 'xxsmall' }}
                margin={{ top: 'small' }}
                responsive={false}
            >
                <StyledTitle color="dark-1" size="medium">
                    <Truncate lines={2}>{props.item.title}</Truncate>
                </StyledTitle>
            </Box>
            <Box direction="row" margin={{ top: 'xsmall' }} justify="between">
                <Box>
                    <StyledAuthor color="dark-3" truncate>
                        {props.item.author}
                    </StyledAuthor>
                </Box>
            </Box>
        </Box>
    )
}

export default CardInfo
