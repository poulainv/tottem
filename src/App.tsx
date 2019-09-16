import { Box, Grid, Grommet, Stack, Image } from 'grommet'
import React from 'react'
import Main from './components/Layouts/Main'
import Sidenav from './components/sidenav/Nav'
import theme from './theme'

const artWork = require('./static/images/artworks/artwork-1.svg')

const App: React.FC = () => {
    return (
        <Grommet theme={theme} full>
            <Box direction="column">
                <Box
                    direction="row"
                    height="xsmall"
                    justify="end"
                    overflow="visible"
                >
                    <Box>
                        <Image src={artWork} />
                    </Box>
                </Box>
                <Box direction="row" justify="center">
                    <Box width="xlarge">
                        <Sidenav />
                    </Box>
                </Box>
            </Box>
        </Grommet>
    )
}

export default App
