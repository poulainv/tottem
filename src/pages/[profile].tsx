import { NextPage, NextPageContext } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import * as React from 'react'
import { Layout } from '../components/Views/Layout'
import ProfileDescription from '../components/Views/Nav'
import ProfileContent from '../components/Views/ProfileContent'
import { ISection, UserProfile } from '../types'

interface IProfileProps {
    userProfile: UserProfile
    sections: ISection[]
}

const Profile: NextPage<IProfileProps> = ({ userProfile, sections }) => {
    const router = useRouter()

    return (
        <Layout>
            <NextSeo
                title={`${userProfile.firstname} - Tottem`}
                description={`${userProfile.firstname} on Tottem - ${userProfile.biography}`}
                canonical={`https://tottem.app/${router.query.profile}`}
                twitter={{
                    site: '@TottemApp',
                    cardType: 'summary',
                }}
                openGraph={{
                    type: 'profile',
                    profile: {
                        username: userProfile.slug,
                    },
                    description: `${userProfile.firstname} on Tottem - ${userProfile.biography}`,
                    url: `https://tottem.app/${router.query.profile}`,
                    site_name: 'Tottem',
                    images: [
                        {
                            url: `https://tottem.app${userProfile.pictureUrl}`,
                        },
                    ],
                }}
            />
            <ProfileDescription {...userProfile} />
            <ProfileContent sections={sections} username="vincent" />
        </Layout>
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
