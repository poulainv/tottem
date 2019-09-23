import { Box, Grommet, ResponsiveContext } from 'grommet'
import React from 'react'
import Main from './components/Views/Main'
import Sidenav from './components/Views/Nav'
import theme from './theme'
import profile from './data/thinkerview/profile'
import Header from './components/Views/Header'

const App: React.FC = () => {
    const isMobile = (size: string) => size === 'small'
    return (
        <Grommet theme={theme} full>
            <ResponsiveContext.Consumer>
                {size => (
                    <Box
                        direction="column"
                        align="center"
                        gap={isMobile(size) ? 'none' : 'large'}
                    >
                        <Header />
                        <Box
                            direction="row-responsive"
                            justify="evenly"
                            width="full"
                        >
                            <Sidenav {...profile} />
                            <Main />
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    )
}

export default App
