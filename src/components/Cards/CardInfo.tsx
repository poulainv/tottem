import { Box, Button, Text } from 'grommet'
import { Share } from 'grommet-icons'
import React from 'react'
import ReactGA from 'react-ga'
import Truncate from 'react-truncate'
import styled from 'styled-components'
import { Item } from '../../types'

const StyledTitle = styled(Text)`
    font-weight: 500;
    font-size: 14px;

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
    item: Item
    hover: boolean
}

function trackOpenItem() {
    ReactGA.initialize('UA-149517534-1')
    ReactGA.event({
        category: 'Item',
        action: 'Open item',
    })
}

const CardInfo: React.FC<CardInfoProps> = (props: CardInfoProps) => {
    const optionButton = (
        <Box direction="row">
            {/* <Button
                style={{ padding: '0px 5px 0px 5px' }}
                icon={<Copy size="small" />}
            /> */}
            <Button
                style={{ padding: '0px 5px 0px 5px' }}
                icon={<Share size="small" />}
                href={props.item.productUrl}
                onClick={trackOpenItem}
                target="_blank"
            />
        </Box>
    )

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
                {props.hover && optionButton}
            </Box>
        </Box>
    )
}

export default CardInfo
