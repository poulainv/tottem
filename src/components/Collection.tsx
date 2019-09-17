import React from 'react'

import { Box, Heading, Markdown } from 'grommet'
import ItemList from './ItemList'
import { ICollection } from '../types'

const Collection: React.FC<ICollection> = props => {
    return (
        <Box direction="column" fill="vertical" margin={{ top: '50px' }}>
            <Box>
                <Heading level="2" size="medium">
                    <Markdown>{props.name}</Markdown>
                </Heading>
            </Box>
            <Box>
                <ItemList items={props.items} type={props.type} />
            </Box>
        </Box>
    )
}

export default Collection
