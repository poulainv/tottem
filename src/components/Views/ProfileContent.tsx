import { Box, ResponsiveContext, Tab, Tabs } from 'grommet'
import React, { useContext, useState } from 'react'
import ReactGA from 'react-ga'
import { useHistory, useLocation } from 'react-router'
import styled from 'styled-components'
import { ISection } from '../../types'
import Section from './Section'

interface ITab {
    isActive: boolean
}

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
    const location = useLocation()
    const history = useHistory()
    const params = new URLSearchParams(location.search)
    const activeSectionId = params.get('section')

    const activeSessionIndex = sortedSections.findIndex(
        x => x.id === activeSectionId
    )
    const [activeTab, setActiveTab] = useState(
        activeSessionIndex !== -1 ? activeSessionIndex : 0
    )

    const setTab = (args: number) => {
        setActiveTab(args)
        history.replace(`/${username}?section=${sortedSections[args].id}`)
        trackChangeTab()
    }

    return { activeTab, setTab }
}

const ProfileContent: React.FC<IProfileContent> = props => {
    const size = useContext(ResponsiveContext)
    const sortedSections = props.sections.sort(x => x.index)
    const { activeTab, setTab } = useTab(props.username, sortedSections)

    return (
        <Box
            margin={{ top: 'small' }}
            pad={{ horizontal: size === 'small' ? 'none' : 'large' }}
        >
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
        </Box>
    )
}

export default ProfileContent
