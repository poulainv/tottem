import { Grommet, ResponsiveContext } from 'grommet'
import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Profile from './pages/Profile'
import theme from './theme'
import ReactGA from 'react-ga'

const App: React.FC = () => {
    useEffect(() => {
        ReactGA.initialize('UA-149517534-1')
        ReactGA.pageview(window.location.pathname + window.location.search)
    })

    return (
        <Router>
            <Grommet theme={theme}>
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
