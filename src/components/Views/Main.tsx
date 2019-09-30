import { Box, Tabs, Tab, ResponsiveContext } from 'grommet'
import React, { useState, useContext } from 'react'
import Section from './Section'
import { ISection } from '../../types'
import TabTitle from '../Tab'

const ProfileContent: React.FC<{ sections: ISection[] }> = props => {
    const size = useContext(ResponsiveContext)
    const [activeTab, setActiveTab] = useState(0)

    return (
        <Box margin={{ top: 'small' }}>
            <Tabs justify="start" onActive={setActiveTab} flex={false}>
                {props.sections.map((section: ISection, index: number) => {
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
