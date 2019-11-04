import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import ProfilePage, { IProfilePageProps } from '../../components/Views/Profile'
import { ISection, UserProfile, ISectionIndex } from '../../types'
import { getAwesomeSections } from '../../data/awesome/sections'
import { getSections, getSectionIndexes } from '../../data/utils'

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

    const sections: ISection[] = getSections(profile)
    const sectionsIndex: ISectionIndex[] = getSectionIndexes(sections)
    const activeSection = sections.find((x: ISection) => x.id === sectionId)

    if (activeSection === undefined) {
        throw Error('Collection not found')
    }

    return { user, sectionsIndex, activeSection }
}

export default Profile
