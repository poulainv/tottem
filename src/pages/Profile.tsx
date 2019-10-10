import { Box, Grommet } from 'grommet'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import Header from '../components/Views/Header'
import ProfileContent from '../components/Views/ProfileContent'
import ProfileDescription from '../components/Views/Nav'
import { RoutingMatchParams, UserProfile } from '../types'
import { Footer } from '../components/Views/Footer'
import { useRouter } from 'next/router'
import theme from '../theme'

interface RoutingMatchProps extends RouteComponentProps<RoutingMatchParams> {}

const Profile = (props: RoutingMatchProps) => {
    // Fetch data
    const userProfile: UserProfile = require(`./../data/vincent/profile`)
        .default
    const sections = require(`../data/vincent/sections`).default

    const router = useRouter()
    return (
        <Grommet theme={theme}>
            <Box align="center" background="light-1">
                <Header />
                <Box margin={{ top: 'large' }} width="xlarge">
                    <ProfileDescription {...userProfile} />
                    <ProfileContent sections={sections} username="vincent" />
                    <Footer />
                </Box>
            </Box>
        </Grommet>
    )
}

export default Profile
