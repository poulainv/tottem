import React from 'react'
import { Box, Button } from 'grommet'

const Header = () => {
    return (
        <Box
            background="white"
            height="xxsmall"
            direction="row"
            width="full"
            align="center"
            justify="end"
            pad="medium"
            border={{ color: 'light-4', size: '0.5px', side: 'bottom' }}
        >
            <Box>
                <Button label="About" plain={true} color="dark-2" />
            </Box>
        </Box>
    )
}

export default Header
