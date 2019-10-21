import React from 'react'
import { Box } from 'grommet'
import { ICollection } from '../../types'
import Collection from '../Cards/Collection'

interface Props {
    collections: ICollection[]
}

const Section: React.FC<Props> = props => {
    return (
        <Box
            direction="column"
            fill
            margin={{ top: 'xsmall' }}
            responsive={false}
        >
            {props.collections
                .sort(
                    (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                )
                .filter(x => x.items)
                .map((collection: ICollection) => {
                    return <Collection key={collection.name} {...collection} />
                })}
        </Box>
    )
}

export default Section
