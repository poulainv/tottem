import * as React from 'react'
import ProfileContent from '../components/Views/Main'
import { RoutingMatchParams, UserProfile } from '../types'
import ProfileDescription from '../components/Views/Nav'
import { RouteComponentProps } from 'react-router'
import { Box } from 'grommet'

interface RoutingMatchProps extends RouteComponentProps<RoutingMatchParams> {}

const Profile = (props: RoutingMatchProps) => {
    // Fetch data
    const userProfile: UserProfile = require(`./../data/${props.match.params.profileId}/profile`)
        .default
    const sections = require(`../data/${props.match.params.profileId}/sections`)
        .default

    return (
        <Box
            pad={{ horizontal: 'large' }}
            margin={{ top: 'medium' }}
            width="xlarge"
        >
            <ProfileDescription {...userProfile} />
            <ProfileContent sections={sections} />
        </Box>
    )
}

export default Profile
