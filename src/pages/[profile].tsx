import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import ProfilePage, { IProfilePageProps } from '../scenes/ProfilePage'
import { withApollo } from '../services/lib/apollo'

const Profile: NextPage<IProfilePageProps> = ({ profile }) => {
    return (
        <React.Fragment>
            <ProfilePage profile={profile} />
        </React.Fragment>
    )
}

interface Context extends NextPageContext {
    query: {
        profile: string
    }
}

Profile.getInitialProps = async (context: Context) => {
    const profile: string = context.query.profile
    return { profile }
}

export default withApollo(Profile)
