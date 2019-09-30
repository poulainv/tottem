import { Box, Grommet, ResponsiveContext } from 'grommet'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import theme from './theme'
import Profile from './pages/Profile'
import Header from './components/Views/Header'

const App: React.FC = () => {
    return (
        <Router>
            <Grommet theme={theme} full>
                <ResponsiveContext.Consumer>
                    {size => (
                        <Box align="center" background="light-1">
                            <Header />
                            <Route exact path="/" />
                            <Route
                                exact
                                path="/:profileId"
                                component={Profile}
                            />
                        </Box>
                    )}
                </ResponsiveContext.Consumer>
            </Grommet>
        </Router>
    )
}

export default App
