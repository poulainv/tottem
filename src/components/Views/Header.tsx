import React from 'react'
import { Box, Button } from 'grommet'

const Header = () => {
    return (
        <Box
            height="xxsmall"
            direction="row"
            width="full"
            background="brand"
            align="center"
            justify="end"
            pad="small"
        >
            <Box>
                <Button label="About" />
            </Box>
        </Box>
    )
}

export default Header
