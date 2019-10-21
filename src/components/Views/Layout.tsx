import { Grommet } from 'grommet/components/Grommet'
import * as React from 'react'
import Header from './Header'
import { Box } from 'grommet'
import { Footer } from './Footer'
import theme from '../../theme'

export interface ILayoutProps {
    children: React.ReactNode
}

export function Layout(props: ILayoutProps) {
    return (
        <Grommet theme={theme}>
            <Box align="center" background="light-1">
                <Header />
                {props.children}
                <Footer />
            </Box>
        </Grommet>
    )
}
