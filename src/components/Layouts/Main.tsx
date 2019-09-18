import { Box, Tabs, Tab } from 'grommet'

import React from 'react'
import Collection from '../Collection'
import sections from '../../data/thinkerview/sections'
// import collections from '../../data/vincent/collections'
import { ICollection, Section } from '../../types'
import { tsPropertySignature } from '@babel/types'

const Main: React.FC = () => {
    return (
        <Tabs justify="start">
            {sections.map((section: Section) => {
                return (
                    <Tab key={section.id} title={section.name}>
                        <Box direction="column" width="large">
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
