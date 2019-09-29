import { Box, Grommet, ResponsiveContext } from 'grommet'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import Main from './components/Views/Main'
import Profile from './components/Views/Nav'
import theme from './theme'
import profile from './data/vincent/profile'
import Header from './components/Views/Header'

// Interface representing the params passed in the URL
export interface RoutingMatchParams {
    profileId: string
}

interface RoutingMatchProps extends RouteComponentProps<RoutingMatchParams> {}

const MainRouteApplication = (props: RoutingMatchProps) => {
    return (
        <Box direction="row-responsive" justify="evenly" width="full">
            <Profile {...props.match.params} />
            <Main {...props.match.params} />
        </Box>
    )
}

const App: React.FC = () => {
    const isMobile = (size: string) => size === 'small'
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
                                component={MainRouteApplication}
                            />

        </Router>
    )
}

export default App
