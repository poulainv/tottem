import { Box, Grommet, ResponsiveContext } from 'grommet'
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import theme from './theme'
import Profile from './pages/Profile'
import Landing from './pages/Landing'

const App: React.FC = () => {
    return (
        <Router>
            <Grommet theme={theme} full>
                <ResponsiveContext.Consumer>
                    {size => (
                        <Fragment>
                            <Route exact path="/" component={Landing} />
                            <Route
                                exact
                                path="/:profileId"
                                component={Profile}
                            />
                        </Fragment>
                    )}
                </ResponsiveContext.Consumer>
            </Grommet>
        </Router>
    )
}

export default App
