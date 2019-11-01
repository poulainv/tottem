import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import ProfilePage, {
    getDefaultSection,
    IProfilePageProps,
} from '../components/Views/Profile'
import { UserProfile } from '../types'

const Profile: NextPage<IProfilePageProps> = props => {
    return (
        <React.Fragment>
            <ProfilePage {...props} />
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
    const user: UserProfile = require(`./../data/${profile}/profile`).default
    const sections = require(`../data/${profile}/sections`).default
    const activeSection = getDefaultSection(sections)
    return { user, sections, activeSection }
}

export default Profile
