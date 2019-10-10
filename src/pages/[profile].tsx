import { Box } from 'grommet/components/Box'
import { Grommet } from 'grommet/components/Grommet'
import { NextPage, NextPageContext } from 'next'
import * as React from 'react'
import { Footer } from '../components/Views/Footer'
import Header from '../components/Views/Header'
import ProfileDescription from '../components/Views/Nav'
import ProfileContent from '../components/Views/ProfileContent'
import theme from '../theme'
import { ISection, UserProfile } from '../types'

interface IProfileProps {
    userProfile: UserProfile
    sections: ISection[]
}

const Profile: NextPage<IProfileProps> = ({ userProfile, sections }) => {
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

interface Context extends NextPageContext {
    query: {
        profile: string
    }
}

Profile.getInitialProps = async (context: Context) => {
    const profile: string = context.query.profile
    const userProfile: UserProfile = require(`./../data/${profile}/profile`)
        .default
    const sections = require(`../data/${profile}/sections`).default
    return { userProfile, sections }
}

export default Profile
