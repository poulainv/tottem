import React from 'react'
import theme from '../theme'
import Circle from './Circle'
import { Stack, Box, Heading } from 'grommet'

interface TabTitleProps {
    active: boolean
    title: string
    size: string
}

const TabTitle: React.FC<TabTitleProps> = (props: TabTitleProps) => {
    return (
        <Stack anchor="center">
            <Box pad={{ vertical: 'small' }}>
                <Heading
                    responsive={false}
                    margin="none"
                    level={props.active ? '1' : '3'}
                    size={props.active ? 'small' : 'xsmall'}
                >
                    {props.title}
                </Heading>
            </Box>
            {props.active && (
                <Box margin={{ top: '35px' }}>
                    <Circle
                        size={props.size}
                        color={theme.global.colors['accent-1']}
                    />
                </Box>
            )}
        </Stack>
    )
}

export default TabTitle
