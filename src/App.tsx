import React from 'react'
import Sidenav from './components/Sidenav/Sidenav'
import theme from './theme'

import { Box, Grid, Grommet } from 'grommet'

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
