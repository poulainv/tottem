import React from 'react'
import { Box } from 'grommet'
import { ICollection } from '../../types'
import Collection from './Collection'

interface Props {
    collections: ICollection[]
}

const Section: React.FC<Props> = props => {
    return (
        <Box
            direction="column"
            width="large"
            border={{
                color: 'light-2',
                size: '1px',
                side: 'top',
            }}
        >
            {props.collections.map((collection: ICollection) => {
                return <Collection key={collection.name} {...collection} />
            })}
        </Box>
    )
}

export default Section
