import { Box, ResponsiveContext } from 'grommet'
import React, { useEffect, useState } from 'react'
import { Auth0 } from '../../pages/_document'
import Link from 'next/link'
import styled from 'styled-components'
import { brand100, brand900 } from '../../constants/colors'
import { Logo, Beta } from '../Logo'

const ButtonCTA = styled.a`
    color: ${brand900};
    border: 1px transparent solid;
    background-color: ${brand100};
    text-decoration: none;
    border-radius: 3px;
    padding: 3px 10px 3px 10px;
    font-weight: 500;
    margin: 0px;
    height: fit-content;
    width: fit-content;
    font-size: 16px;
    cursor: pointer;

    :hover {
        border: 1px ${brand900} solid;
    }

    @media screen and (max-width: 812px) {
        font-size: 12px;
    }
`

const logout = () => {
    Auth0.logout()
}

const Header = () => {
    const size = React.useContext(ResponsiveContext)
    const [isLoggedIn, setIsLoggedIn] = useState()
    const [userData, setUserData] = useState()

    useEffect(() => {
        const lsLoggedIn = localStorage.getItem('isLoggedIn')
        const lsUserDetails = localStorage.getItem('user_details')
        setIsLoggedIn(lsLoggedIn ? JSON.parse(lsLoggedIn) : false)
        setUserData(lsUserDetails ? JSON.parse(lsUserDetails) : null)
    }, [])

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
                        <Logo>
                            Tottem
                            <Beta>beta</Beta>
                        </Logo>
                    </Link>
                </Box>
                <Box direction="row" align="center">
                    {isLoggedIn && (
                        <Box direction="row" align="center" gap="medium">
                            {`Hi ${userData.given_name || userData.nickname}!`}
                            <ButtonCTA onClick={logout}>Logout</ButtonCTA>
                        </Box>
                    )}
                    <ButtonCTA href="http://eepurl.com/gE44Sz" target="_blank">
                        Recevoir les nouvelles collections
                    </ButtonCTA>
                </Box>
            </Box>
        </Box>
    )
}

export default Header
