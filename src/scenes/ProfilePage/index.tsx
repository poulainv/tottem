import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Box } from 'grommet'
import { NextSeo } from 'next-seo'
import * as React from 'react'
import styled from 'styled-components'

import AppTableOfContents from './AppTableOfContents'
import { SectionMenu } from './Section/SectionMenu'
import ProfileActions from './Actions'
import { Layout, PageBox } from '../../components/Layout'
import ProfileHeader from './Headers'
import SectionDetails from './Section'
import LoadingPage from '../LoadingPage'
import { useAuthUser } from '../../utils/authentication'
import { ISection, UserProfile } from './types'
import { ProfilePageFragment } from './queries'

const ContentBox = styled(Box)`
    margin-top: 40px;
    @media screen and (max-width: 812px) {
        margin-top: 8px;
        padding-right: 0px;
        padding-left: 0px;
    }
`

export const getDefaultSection = (sections: ISection[]): ISection => {
    const minimumIndex = Math.min(...sections.map(x => x.index))
    const defaultSection = sections.find(x => x.index === minimumIndex)
    if (defaultSection === undefined) {
        throw Error('No default section')
    }
    return defaultSection
}

export interface IProfilePageProps {
    activeSectionSlug?: string
    profile: string
}
export const Side = styled(Box)`
    width: 240px;
    height: 100%;
    flex-shrink: 6;
    visibility: hidden;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`

interface ProfileQueryData {
    user: UserProfile
    sections: ISection[]
}

interface ProfileQueryVars {
    slug: string
    sectionId?: string
    index: number
}

const profileQuery = gql`
    query getProfile($slug: String) {
        user(where: { slug: $slug }) {
            ...UserProfilePage
        }
        sections(where: { owner: { slug: { equals: $slug } } }) {
            ...SectionProfilePage
        }
    }
    ${ProfilePageFragment.user}
    ${ProfilePageFragment.section}
`

export default (props: IProfilePageProps) => {
    const { loading, data } = useQuery<ProfileQueryData, ProfileQueryVars>(
        profileQuery,
        {
            variables: {
                slug: props.profile,
                sectionId: props.activeSectionSlug,
                index: props.activeSectionSlug === undefined ? 0 : -1,
            },
        }
    )

    const authUser = useAuthUser()

    if (loading || data === undefined) {
        return <LoadingPage />
    }
    const { user, sections } = data

    const activeSection =
        sections.find(x => x.slug === props.activeSectionSlug) ||
        getDefaultSection(sections)

    return (
        <Layout>
            <NextSeo
                title={`${user.firstname} - Tottem`}
                description={`${user.firstname} on Tottem - ${user.biography}`}
                canonical={`https://tottem.app/${props.profile}/${activeSection.slug}`}
                twitter={{
                    site: '@TottemApp',
                    cardType: 'summary',
                }}
                openGraph={{
                    type: 'profile',
                    profile: {
                        username: user.slug,
                    },
                    description: `${user.firstname} on Tottem - ${user.biography}`,
                    url: `https://tottem.app/${props.profile}`,
                    site_name: 'Tottem',
                    images: [
                        {
                            url: `https://tottem.app${user.pictureUrl}`,
                        },
                    ],
                }}
            />

            <Side />
            <PageBox>
                <ProfileHeader {...user} />
                <ContentBox pad={{ horizontal: 'large' }}>
                    <SectionMenu
                        activeSectionSlug={activeSection.slug}
                        sections={sections}
                    />
                    {authUser && (
                        <ProfileActions activeSectionId={activeSection.id} />
                    )}
                    <SectionDetails
                        profileSlug={props.profile}
                        sectionIndex={activeSection.slug === undefined ? 0 : -1}
                        key={activeSection.slug}
                        sectionSlug={activeSection.slug}
                    />
                </ContentBox>
            </PageBox>
            <AppTableOfContents
                profileSlug={props.profile}
                sectionIndex={activeSection.slug === undefined ? 0 : -1}
                sectionSlug={activeSection.slug}
            />
        </Layout>
    )
}
