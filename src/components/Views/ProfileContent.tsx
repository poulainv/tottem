import { Box, Tab, Tabs } from 'grommet'
import React, { useState } from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import { ISection } from '../../types'
import Section from './Section'
import { ICollection } from '../../graphql/types'
import Link from 'next/link'

interface ITab {
    isActive: boolean
}

const ProfileContentBox = styled(Box)`
    margin-top: 16px;
    @media screen and (max-width: 812px) {
        margin-top: 24px;
        padding-right: 0px;
        padding-left: 0px;
    }
`

const TabTitle = styled.span`
    font-size: 16px;
    color: ${(props: ITab) => (!props.isActive ? '#333333' : '#D87551')};
    @media screen and (max-width: 812px) {
        font-size: 14px;
    }
`

interface IProfileContent {
    sections: ISection[]
    username: string
    collections: ICollection[]
    activeSectionId?: string
}

const ProfileContent: React.FC<IProfileContent> = props => {
    const sortedSections = props.sections.sort((a, b) => a.index - b.index)

    return (
        <ProfileContentBox pad={{ horizontal: 'large' }}>
            {sortedSections.map((section: ISection, index: number) => {
                return (
                    <Link
                        key={section.id}
                        href="/[slug]/[section]"
                        as={`/thinkerview/${section.id}`}
                    >
                        <a> {section.name}</a>
                    </Link>
                )
            })}
            <Section collections={props.collections} />
        </ProfileContentBox>
    )
}

export default ProfileContent
