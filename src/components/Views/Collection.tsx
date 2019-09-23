import React from 'react'

import { Box, Heading, Markdown } from 'grommet'
import ItemList from './ItemList'
import { ICollection } from '../../types'

const Collection: React.FC<ICollection> = props => {
    return (
        <Box direction="column" fill="vertical" margin={{ top: 'medium' }}>
            <Box margin={{ horizontal: 'medium' }}>
                <Heading level="3" size="medium">
                    <Markdown>{props.name}</Markdown>
                </Heading>
            </Box>
            <ItemList items={props.items} />
        </Box>
    )
}

export default Collection
