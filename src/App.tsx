import { Box, Grid, Grommet } from 'grommet'
import React from 'react'
import Main from './components/Layouts/Main'
import Sidenav from './components/sidenav/Nav'
import theme from './theme'

const App: React.FC = () => {
    return (
        <Grommet theme={theme} full={true}>
            <Box direction="row" align="start" justify="stretch" height="full">
                <Sidenav />
                <Main />
            </Box>
        </Grommet>
    )
}

export default App
