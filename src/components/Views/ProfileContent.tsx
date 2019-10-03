import { Box, ResponsiveContext, Tab, Tabs } from 'grommet'
import React, { useContext, useState } from 'react'
import { ISection } from '../../types'
import TabTitle from '../Tab'
import Section from './Section'
import { useHistory, useLocation, useParams } from 'react-router'

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
    }

    return { activeTab, setTab }
}

const ProfileContent: React.FC<IProfileContent> = props => {
    const size = useContext(ResponsiveContext)
    const sortedSections = props.sections.sort(x => x.index)
    const { activeTab, setTab } = useTab(props.username, sortedSections)

    return (
        <Box margin={{ top: 'small' }}>
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
                                    <TabTitle
                                        size={size}
                                        title={section.name}
                                        active={activeTab === index}
                                    />
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
