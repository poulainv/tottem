import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import ProfilePage, { IProfilePageProps } from '../../components/Views/Profile'
import { ISection, UserProfile } from '../../types'

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
        sectionId: string
    }
}

Profile.getInitialProps = async (context: Context) => {
    const profile: string = context.query.profile
    const sectionId: string = context.query.sectionId
    const user: UserProfile = require(`./../../data/${profile}/profile`).default
    const sections = require(`../../data/${profile}/sections`).default
    const collections = sections.find((x: ISection) => x.id === sectionId)
        .collections
    return { user, sections, collections }
}

export default Profile
