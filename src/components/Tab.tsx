import React from 'react'
import theme from '../theme'
import Circle from './Circle'
import { Stack, Box, Heading } from 'grommet'

interface TabTitleProps {
    active: boolean
    title: string
}

const TabTitle: React.FC<TabTitleProps> = (props: TabTitleProps) => {
    return (
        <Stack anchor="bottom">
            <Box pad={{ vertical: 'xsmall' }}>
                <Heading level={props.active ? '1' : '3'} size="tab">
                    {props.title}
                </Heading>
            </Box>
            {props.active ? (
                <Circle color={theme.global.colors['accent-1']} />
            ) : (
                <div />
            )}
        </Stack>
    )
}

export default TabTitle
