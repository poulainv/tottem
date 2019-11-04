import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import ProfilePage, {
    getDefaultSection,
    IProfilePageProps,
} from '../components/Views/Profile'
import { UserProfile, ISection, ISectionIndex } from '../types'
import Error from 'next/error'
import { getSections, getSectionIndexes } from '../data/utils'

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

        const sections: ISection[] = getSections(profile)
        const sectionsIndex: ISectionIndex[] = getSectionIndexes(sections)
        const activeSection = getDefaultSection(sections)
        return { data: { user, sectionsIndex, activeSection } }
    } catch (err) {
        console.log(`Profile not found ${profile} ${err}`) // Use proper logger
        return { data: undefined }
    }
}

export default Profile
