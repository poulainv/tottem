import React from 'react'

import { Box, Heading, Markdown } from 'grommet'
import ItemList from './ItemList'

const Collection: React.FC = () => {
    return (
        <Box direction="column" fill="vertical" margin={{ top: '70px' }}>
            <Box>
                <Heading level="2" size="medium">
                    <Markdown>**Books,** that get me inspired</Markdown>
                </Heading>
            </Box>
            <Box>
                <ItemList />
            </Box>
        </Box>
    )
}

export default Collection
