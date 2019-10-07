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
            {props.collections
                .sort((a, b) => b.date.getTime() - a.date.getTime())
                .filter(x => x.items)
                .map((collection: ICollection) => {
                    return <Collection key={collection.name} {...collection} />
                })}
        </Box>
    )
}

export default Section
