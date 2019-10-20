import { Box, ResponsiveContext } from 'grommet'
import React, { useEffect, useState } from 'react'
import Auth from '../../lib/Auth'
import Logo from '../Logo'
import styled from 'styled-components'
import Link from 'next/link'
const auth = new Auth()

const ButtonCTA = styled.a`
    color: #407f6e;
    border: 1px transparent solid;
    background-color: #d4e6e1;
    border-radius: 3px;
    padding: 3px 10px 3px 10px;
    font-weight: 500;
    margin: 0px;
    height: fit-content;
    width: fit-content;
    font-size: 16px;

    :hover {
        border: 1px #407f6e solid;
    }

    @media screen and (max-width: 812px) {
        font-size: 14px;
    }
`

const logout = () => {
    auth.logout()
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
                        <Logo>Tottem</Logo>
                    </Link>
                </Box>
                <Box direction="row" align="center">
                    <Link href="/">
                        <ButtonCTA>What's Tottem?</ButtonCTA>
                    </Link>
                    {isLoggedIn ? (
                        <Box direction="row" align="center">
                            {`Hi ${userData.given_name}!`}
                            <button onClick={logout}>Logout</button>
                        </Box>
                    ) : null}
                </Box>
            </Box>
        </Box>
    )
}

export default Header
