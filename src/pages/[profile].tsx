import { Box } from 'grommet/components/Box'
import { Grommet } from 'grommet/components/Grommet'
import { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import * as React from 'react'
import { Footer } from '../components/Views/Footer'
import Header from '../components/Views/Header'
import ProfileDescription from '../components/Views/Nav'
import ProfileContent from '../components/Views/ProfileContent'
import theme from '../theme'
import { ISection, UserProfile } from '../types'
import { NextSeo } from 'next-seo'

interface IProfileProps {
    userProfile: UserProfile
    sections: ISection[]
}

const Profile: NextPage<IProfileProps> = ({ userProfile, sections }) => {
    const arrSum = (arr: number[]) =>
        arr.reduce((a: number, b: number) => a + b, 0)
    const collectionCount = arrSum(sections.map(x => x.collections.length))
    const router = useRouter()
    return (
        <Grommet theme={theme}>
            <NextSeo
                title={`${userProfile.firstname} - Tottem`}
                description={`See ${collectionCount} ${userProfile.firstname} collections`}
                openGraph={{
                    description: `See ${collectionCount} ${userProfile.firstname} collections`,
                    url: `https://tottem.app/${router.query.profile}`,
                    site_name: 'Tottem',
                    images: [
                        {
                            width: 698,
                            height: 388,
                            url: 'https://tottem.app/thumbnail.png',
                        },
                    ],
                }}
            />

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
