import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import ProfilePage, { IProfilePageProps } from '../../scenes/ProfilePage'
import { withApollo } from '../../lib/apollo'

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
    const activeSectionSlug: string = context.query.sectionId
    return { profile, activeSectionSlug }
}

export default withApollo(Profile)
