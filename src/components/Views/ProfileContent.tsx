import { Box, ResponsiveContext, Tab, Tabs } from 'grommet'
import React, { useContext, useState } from 'react'
import { ISection } from '../../types'
import TabTitle from '../Tab'
import Section from './Section'
import { useHistory } from 'react-router'

interface IProfileContent {
    sections: ISection[]
    username: string
    activeSectionId?: string
}

const ProfileContent: React.FC<IProfileContent> = props => {
    const size = useContext(ResponsiveContext)
    const sortedSections = props.sections.sort(x => x.index)
    const history = useHistory()
    const activeSessionIndex = sortedSections.findIndex(
        x => x.id === props.activeSectionId
    )

    const [activeTab, setActiveTab] = useState(
        activeSessionIndex !== -1 ? activeSessionIndex : 0
    )

    const sectionClickHandler = (args: number) => {
        setActiveTab(args)
        history.replace(`/${props.username}/${sortedSections[args].id}`)
    }

    return (
        <Box margin={{ top: 'small' }}>
            <Tabs justify="start" onActive={sectionClickHandler} flex={false}>
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
