import React from 'react'

import { Box, Heading } from 'grommet'
import ItemList from './ItemList'

const Collection: React.FC = () => {
    return (
        <Box direction="column" fill="vertical" margin={{ top: '70px' }}>
            <Box>
                <Heading level="2" size="medium">
                    Books, that get me inspired
                </Heading>
            </Box>
            <Box background="light-3">
                <ItemList />
            </Box>
        </Box>
    )
}

export default Collection
