import { Box, Button, ResponsiveContext } from 'grommet'
import React from 'react'
import Logo from '../Logo'
import styled from 'styled-components'

const ButtonCTA = styled(Button)`
    color: #407f6e;
    border: 1px transparent solid;
    background-color: #d4e6e1;
    border-radius: 3px;
    padding: 3px 10px 3px 10px;
    font-weight: 500;
    margin: 0px;
    height: fit-content;
    width: fit-content;

    :hover {
        border: 1px #407f6e solid;
    }

    @media screen and (max-width: 812px) {
        font-size: 14px;
    }
`

const Header = () => {
    const size = React.useContext(ResponsiveContext)
    return (
        <Box
            background="white"
            height="xxsmall"
            direction="row"
            width="full"
            align="center"
            justify="center"
            pad={size === 'large' ? 'medium' : 'none'}
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
                    <Button plain={true} label={<Logo>Tottem</Logo>} href="/" />
                </Box>
                <Box>
                    <ButtonCTA
                        label="What's Tottem?"
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
