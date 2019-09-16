import { Box, Grid, Grommet, Stack, Image } from 'grommet'
import React from 'react'
import Main from './components/Layouts/Main'
import Sidenav from './components/sidenav/Nav'
import theme from './theme'

const artWork = require('./static/images/artworks/artwork-1.svg')

const App: React.FC = () => {
    return (
        <Grommet theme={theme} full>
            <Box direction="column" align="center">
                <Box
                    direction="row"
                    height="xsmall"
                    justify="end"
                    overflow="visible"
                    width="full"
                >
                    <Box>
                        <Image src={artWork} />
                    </Box>
                </Box>
                <Box direction="row" justify="between" width="xlarge">
                    <Box>
                        <Sidenav />
                    </Box>
                    <Box>
                        <Main />
                    </Box>
                </Box>
            </Box>
        </Grommet>
    )
}

export default App
