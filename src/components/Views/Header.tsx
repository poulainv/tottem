import { Box, Button } from 'grommet'
import React from 'react'

const Header = () => {
    return (
        <Box
            background="white"
            height="xxsmall"
            direction="row"
            width="full"
            align="center"
            justify="center"
            pad="medium"
            border={{ color: 'light-4', size: '0.5px', side: 'bottom' }}
        >
            <Box
                pad={{ horizontal: 'large' }}
                width="xlarge"
                direction="row"
                align="center"
                justify="between"
            >
                <Box>
                    {/* <Button plain={true} label={<Logo>tottem</Logo>} href="/" /> */}
                </Box>
                <Box>
                    <Button
                        label="About"
                        plain={true}
                        color="dark-2"
                        href="/"
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Header
