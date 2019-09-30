import { Box, Grommet, ResponsiveContext } from 'grommet'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import Main from './components/Views/Main'
import ProfileDescription from './components/Views/Nav'
import theme from './theme'
import Header from './components/Views/Header'

// Interface representing the params passed in the URL
export interface RoutingMatchParams {
    profileId: string
}

interface RoutingMatchProps extends RouteComponentProps<RoutingMatchParams> {}

const ProfileApp = (props: RoutingMatchProps) => {
    return (
        <Box
            pad={{ horizontal: 'large' }}
            margin={{ top: 'medium' }}
            width="xlarge"
        >
            <ProfileDescription {...props.match.params} />
            <Main {...props.match.params} />
        </Box>
    )
}

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
                                component={ProfileApp}
                            />
                        </Box>
                    )}
                </ResponsiveContext.Consumer>
            </Grommet>
        </Router>
    )
}

export default App
