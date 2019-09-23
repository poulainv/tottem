import { Box, Tabs, Tab, ResponsiveContext } from 'grommet'

import React, { useState, useContext } from 'react'
import Section from './Section'
// Choose your profile here for now :)
import sections from '../../data/vincent/sections'

import { ISection } from '../../types'
import TabTitle from '../Tab'

const Main: React.FC = () => {
    const size = useContext(ResponsiveContext)
    const [activeTab, setActiveTab] = useState(0)

    return (
        <Box
            background="white"
            round={{ size: '25px', corner: 'top' }}
            basis="60%"
        >
            <Box pad={{ horizontal: size === 'large' ? 'none' : 'large' }}>
                <Tabs justify="start" onActive={setActiveTab}>
                    {sections.map((section: ISection, index: number) => {
                        return (
                            <Tab
                                key={section.id}
                                title={
                                    sections.length > 1 && (
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
        </Box>
    )
}

export default Main
