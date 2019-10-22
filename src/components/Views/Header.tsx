import { Box, ResponsiveContext } from 'grommet'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { brand100, brand900 } from '../../constants/colors'
import Logo from '../Logo'

const ButtonCTA = styled.a`
    color: ${brand900};
    border: 1px transparent solid;
    background-color: ${brand100};
    border-radius: 3px;
    padding: 3px 10px 3px 10px;
    font-weight: 500;
    margin: 0px;
    height: fit-content;
    width: fit-content;
    font-size: 16px;

    :hover {
        border: 1px ${brand900} solid;
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
                    <Link href="/">
                        <Logo>Tottem</Logo>
                    </Link>
                </Box>
                <Box>
                    <Link href="/">
                        <ButtonCTA>À propos</ButtonCTA>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Header
