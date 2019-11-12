import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Box } from 'grommet'
import { NextSeo } from 'next-seo'
import * as React from 'react'
import styled from 'styled-components'
import { ISection, ProfilePageFragment } from '../../fragments/profile'
import AppTableOfContents from '../AppTableOfContents'
import { SectionMenu } from '../SectionMenu'
import { Layout, PageBox } from './Layout'
import ProfileDescription from './Nav'
import Section from './Section'

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
    activeSectionId?: string
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

export default function ProfilePage(props: IProfilePageProps) {
    const { loading, error, data } = useQuery(profileQuery, {
        variables: {
            slug: props.profile,
            sectionId: props.activeSectionId,
            index: props.activeSectionId === undefined ? 0 : -1,
        },
    })

    if (loading) {
        return <div>Loading</div>
    }
    const { user, sections } = data
    const activeSectionId =
        props.activeSectionId || getDefaultSection(sections).slug
    return (
        <Layout>
            <NextSeo
                title={`${user.firstname} - Tottem`}
                description={`${user.firstname} on Tottem - ${user.biography}`}
                canonical={`https://tottem.app/${props.profile}/${activeSectionId}`}
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
                <ProfileDescription {...user} />
                <ContentBox pad={{ horizontal: 'large' }}>
                    <SectionMenu
                        activeSectionId={activeSectionId}
                        sections={sections}
                    />
                    <Section
                        slug={props.profile}
                        index={activeSectionId === undefined ? 0 : -1}
                        key={activeSectionId}
                        sectionId={activeSectionId}
                    />
                </ContentBox>
            </PageBox>
            <AppTableOfContents
                slug={props.profile}
                index={activeSectionId === undefined ? 0 : -1}
                sectionId={activeSectionId}
            />
        </Layout>
    )
}
