import React from 'react'
import Sidenav from './components/Sidenav/Nav'

import { Box, Grid, Grommet } from 'grommet'
import theme from './theme'

const App: React.FC = () => {
    return (
        <Grommet theme={theme} full={true}>
            <Box direction="row" align="start" justify="stretch" height="full">
                <Sidenav />
            </Box>
            Hello World
        </Grommet>
    )
}

export default App
