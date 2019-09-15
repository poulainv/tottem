import React from 'react'
import Sidenav from './components/sidenav/sidenav'

import { Box, Grid, Grommet } from 'grommet'

const theme = {
    global: {
        font: {
            family: 'Roboto',
            height: '20px',
            size: '14px',
        },
    },
}

const App: React.FC = () => {
    return (
        <Grommet theme={theme} full={true}>
            <Box direction="row" align="start" justify="stretch" height="full">
                <Sidenav />
                <Box
                    flex={true}
                    direction="row"
                    align="start"
                    justify="center"
                    margin="30px 0px 0px 0px"
                ></Box>
            </Box>
        </Grommet>
    )
}

export default App
