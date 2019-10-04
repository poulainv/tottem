import React from 'react'
import { Box, Text, Button } from 'grommet'
import Truncate from 'react-truncate'
import { Item } from '../../types'
import styled from 'styled-components'
import { Copy, Share } from 'grommet-icons'
import { CardSize } from './Card'

const StyledTitle = styled(Text)`
    font-weight: 500;
    font-size: 14px;

    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`

interface CardInfoProps {
    item: Item
    small: boolean
    hover: boolean
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
                    {/* Crazy stuff to just split multi lines :'( */}
                    <Truncate
                        width={
                            props.small
                                ? CardSize.small.widthInNumber
                                : CardSize.large.widthInNumber
                        }
                        lines={2}
                    >
                        {props.item.title}
                    </Truncate>
                </StyledTitle>
            </Box>
            <Box direction="row" margin={{ top: 'xsmall' }} justify="between">
                <Box>
                    <Text color="dark-3" size="small" truncate>
                        {props.item.author}
                    </Text>
                </Box>
                {props.hover && optionButton}
            </Box>
        </Box>
    )
}

export default CardInfo
