import { Grommet } from 'grommet/components/Grommet'
import * as React from 'react'
import Header from './Header'
import { Box } from 'grommet'
import { Footer } from './Footer'
import theme from '../../theme'
import styled from 'styled-components'

const PageBox = styled(Box)`
    margin-top: 72px;
    position: relative;
    @media screen and (max-width: 600px) {
        margin-top: 24px;
    }
`

export interface ILayoutProps {
    children: React.ReactNode
}

export function Layout(props: ILayoutProps) {
    return (
        <Grommet theme={theme}>
            <Box align="center" background="light-1">
                <Header />
                <PageBox width="xlarge">{props.children}</PageBox>
                <Footer />
            </Box>
        </Grommet>
    )
}
