import React from 'react'
import { Box, Button, Heading } from 'grommet'
import Logo from '../Logo'

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
                    <Logo>tottem</Logo>
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
