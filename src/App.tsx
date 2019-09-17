import { Box, Grommet, Image } from 'grommet'
import React from 'react'
import Main from './components/Layouts/Main'
import Sidenav from './components/sidenav/Nav'
import theme from './theme'
import profiles from './data/profiles'

const artWork = require('./static/images/artworks/artwork-1.svg')
const user = profiles[0]

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
                <Box
                    direction="row"
                    justify="between"
                    width="xxlarge"
                    gap="large"
                >
                    <Box>
                        <Sidenav {...user} />
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
