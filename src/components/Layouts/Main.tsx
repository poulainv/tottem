import { Box } from 'grommet'

import React from 'react'
import Collection from '../Collection'
import collections from '../../data/collections'
import { ICollection } from '../../types'

const Main: React.FC = () => {
    return (
        <Box direction="column" width="large">
            {collections.map((collection: ICollection) => {
                return <Collection key={collection.name} {...collection} />
            })}
        </Box>
    )
}

export default Main
