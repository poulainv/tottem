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
    const arrSum = (arr: number[]) =>
        arr.reduce((a: number, b: number) => a + b, 0)
    const collectionCount = arrSum(sections.map(x => x.collections.length))
    const router = useRouter()

    return (
        <Layout>
            <NextSeo
                title={`${userProfile.firstname} - Tottem`}
                description={`See ${collectionCount} collections of ${userProfile.firstname} - Tottem is place where enthusiastic people and organizations share relevant collections of hand-picked items — books, articles, movies and more`}
                openGraph={{
                    description: `See ${collectionCount} collections of ${userProfile.firstname} - Tottem is place where enthusiastic people and organizations share relevant collections of hand-picked items — books, articles, movies and more`,
                    url: `https://tottem.app/${router.query.profile}`,
                    site_name: 'Tottem',
                    images: [
                        {
                            width: 556,
                            height: 392,
                            url: `https://tottem.app/thumbnail-${router.query.profile}.jpg`,
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
