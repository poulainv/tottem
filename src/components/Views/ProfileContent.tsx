import { Box, Tab, Tabs } from 'grommet'
import React, { useState } from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import { ISection } from '../../types'
import Section from './Section'

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
    activeSectionId?: string
}

/* Hook allowing to keep tab updated with query parameters
   We probably should React Router to do it properly in order to 
   conserve history & state.

   - If no query parameter provided the first section is selected by default
   - Query parameters named "section" is filled with current sectionId when new tab 
    is clicked
*/

function trackChangeTab() {
    ReactGA.initialize('UA-149517534-1')
    ReactGA.event({
        category: 'Section',
        action: 'Click on change section',
    })
}

function useTab(username: string, sortedSections: ISection[]) {
    const activeSectionId = undefined

    const activeSessionIndex = sortedSections.findIndex(
        x => x.id === activeSectionId
    )
    const [activeTab, setActiveTab] = useState(
        activeSessionIndex !== -1 ? activeSessionIndex : 0
    )

    const setTab = (args: number) => {
        setActiveTab(args)
        trackChangeTab()
    }

    return { activeTab, setTab }
}

const ProfileContent: React.FC<IProfileContent> = props => {
    const sortedSections = props.sections.sort((a, b) => a.index - b.index)
    const { activeTab, setTab } = useTab(props.username, sortedSections)

    return (
        <ProfileContentBox pad={{ horizontal: 'large' }}>
            <Tabs
                justify="start"
                onActive={setTab}
                flex={false}
                activeIndex={activeTab}
            >
                {sortedSections.map((section: ISection, index: number) => {
                    return (
                        <Tab
                            key={section.id}
                            title={
                                props.sections.length > 1 && (
                                    <TabTitle isActive={activeTab === index}>
                                        {section.name}
                                    </TabTitle>
                                )
                            }
                        >
                            <Section collections={section.collections} />
                        </Tab>
                    )
                })}
            </Tabs>
        </ProfileContentBox>
    )
}

export default ProfileContent
