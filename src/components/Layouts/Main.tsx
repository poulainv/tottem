import { Box, Tabs, Tab, Heading, Stack } from 'grommet'

import React, { useState } from 'react'
import Collection from '../Collection'
import sections from '../../data/thinkerview/sections'

import { ICollection, Section } from '../../types'
import TabTitle from '../Tab'

const Main: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <Tabs justify="start" onActive={setActiveTab}>
            {sections.map((section: Section, index: number) => {
                return (
                    <Tab
                        key={section.id}
                        title={
                            <TabTitle
                                title={section.name}
                                active={activeTab === index}
                            />
                        }
                    >
                        <Box
                            direction="column"
                            width="large"
                            border={{
                                color: 'light-2',
                                size: '1px',
                                side: 'top',
                            }}
                        >
                            {section.collections.map(
                                (collection: ICollection) => {
                                    return (
                                        <Collection
                                            key={collection.name}
                                            {...collection}
                                        />
                                    )
                                }
                            )}
                        </Box>
                    </Tab>
                )
            })}
        </Tabs>
    )
}

export default Main
