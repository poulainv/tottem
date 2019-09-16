import { Box, Grid, Grommet } from 'grommet'
import React from 'react'
import Main from './components/Layouts/Main'
import Sidenav from './components/sidenav/Nav'
import theme from './theme'

const App: React.FC = () => {
    return (
        <Grommet theme={theme} full>
            <Box direction="row" justify="center">
                <Box width="xlarge" margin={{ top: 'xlarge' }}>
                    <Sidenav />
                </Box>
            </Box>
        </Grommet>
    )
}

export default App
