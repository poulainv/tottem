import { Box, Tabs, Tab, ResponsiveContext } from 'grommet'

import React, { useState, useContext } from 'react'
import { RoutingMatchParams } from '../../App'
import Section from './Section'

import { ISection } from '../../types'
import TabTitle from '../Tab'

const Main: React.FC<RoutingMatchParams> = params => {
    const sections = require(`../../data/${params.profileId}/sections`).default

    const size = useContext(ResponsiveContext)
    const [activeTab, setActiveTab] = useState(0)

    return (
        <Box margin={{ top: 'small' }}>
            <Tabs justify="start" onActive={setActiveTab} flex={false}>
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
    )
}

export default Main
