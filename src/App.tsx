import { Box, Grommet, ResponsiveContext, Button } from 'grommet'
import React from 'react'
import Main from './components/Layouts/Main'
import Sidenav from './components/sidenav/Nav'
import theme from './theme'
import profile from './data/vincent/profile'

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
                        background={isMobile(size) ? 'brand' : 'white'}
                    >
                        <Box
                            height="xxsmall"
                            direction="row"
                            width="full"
                            background="brand"
                            align="center"
                            justify="end"
                            pad="small"
                        >
                            <Box>
                                <Button label="About" />
                            </Box>
                        </Box>
                        <Box
                            direction="row-responsive"
                            justify="evenly"
                            basis="auto"
                            width="full"
                            // gap="large"
                        >
                            <Box align="center" basis="20%">
                                <Sidenav {...profile} />
                            </Box>
                            <Box
                                background="white"
                                round={{ size: '25px', corner: 'top' }}
                                overflow="hidden"
                            >
                                <Main />
                            </Box>
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    )
}

export default App
