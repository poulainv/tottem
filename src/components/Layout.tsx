import { Box } from 'grommet'
import { Grommet } from 'grommet/components/Grommet'
import * as React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import { PageFooter } from './PageFooter'
import Header from './TopBar'
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

export const ContentBox = styled(Box)`
    margin: 40px 0px 40px 0px;
    padding: 0px 48px 0px 48px;
    width: 100%;
    @media screen and (max-width: 812px) {
        margin-top: 24px;
        padding-right: 0px;
        padding-left: 0px;
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
                <Box
                    direction="row"
                    justify="center"
                    style={{ minHeight: '85vh' }}
                >
                    {props.children}
                </Box>
                <PageFooter />
            </Box>
        </Grommet>
    )
}
