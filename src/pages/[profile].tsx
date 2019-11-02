import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import ProfilePage, {
    getDefaultSection,
    IProfilePageProps,
} from '../components/Views/Profile'
import { UserProfile } from '../types'
import Error from 'next/error'

const Profile: NextPage<{ data?: IProfilePageProps }> = ({ data }) => {
    if (data === undefined) {
        return <Error statusCode={404} />
    }
    return (
        <React.Fragment>
            <ProfilePage {...data} />
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
    try {
        const user: UserProfile = require(`./../data/${profile}/profile`)
            .default
        const sections = require(`../data/${profile}/sections`).default
        const activeSection = getDefaultSection(sections)
        return { data: { user, sections, activeSection } }
    } catch {
        console.log(`Profile not found ${profile}`) // Use proper logger
        return { data: undefined }
    }
}

export default Profile
