import React from 'react'
import { Box } from 'grommet'
import { ICollection } from '../../types'
import Collection from './Collection'

interface Props {
    collections: ICollection[]
}

const Section: React.FC<Props> = props => {
    return (
        <Box direction="column" fill>
            {props.collections.map((collection: ICollection) => {
                return <Collection key={collection.name} {...collection} />
            })}
        </Box>
    )
}

export default Section
