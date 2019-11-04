import { Box } from 'grommet'
import { Grommet } from 'grommet/components/Grommet'
import * as React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { Footer } from './Footer'
import Header from './Header'
import ReactGA from 'react-ga'

export const PageBox = styled(Box)`
    margin-top: 72px;
    position: relative;
    width: 1152px;
    flex-shrink: 1;
    @media screen and (max-width: 600px) {
        margin-top: 24px;
    }
`

export interface ILayoutProps {
    children: React.ReactNode
}

export function Layout(props: ILayoutProps) {
    React.useEffect(() => {
        ReactGA.initialize('UA-149517534-1', {
            testMode: process.env.NODE_ENV === 'test',
        })
        ReactGA.pageview(window.location.pathname + window.location.search)
    })
    return (
        <Grommet theme={theme}>
            <Box align="center" background="light-1">
                <Header />
                <Box direction="row" justify="center">
                    {props.children}
                </Box>
                <Footer />
            </Box>
        </Grommet>
    )
}
