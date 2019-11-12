import { Anchor, Box } from 'grommet'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ReactGA from 'react-ga'
import { Auth0 } from '../../pages/_document'
import { StyledButton } from '../atoms/Button'
import { Beta, Logo } from '../atoms/Logo'

const logout = () => {
    Auth0.logout()
}

const trackTableOfContent = (name: string) => {
    ReactGA.initialize('UA-149517534-1')
    ReactGA.event({
        category: 'Engagement',
        action: `Click on ${name}`,
    })
}
const Header = () => {
    const router = useRouter()
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
                    <Link href="/" passHref>
                        <Anchor>
                            <Logo>
                                Tottem
                                <Beta>beta</Beta>
                            </Logo>
                        </Anchor>
                    </Link>
                </Box>
                <Box direction="row" align="center" gap="small">
                    {isLoggedIn &&
                        `Hi ${userData.given_name || userData.nickname}!`}
                    <Anchor
                        href="https://vincentp791262.typeform.com/to/LOiv5v"
                        target="_blank"
                    >
                        <StyledButton
                            onClick={() => trackTableOfContent('New Profile')}
                        >
                            Créer son profil
                        </StyledButton>
                    </Anchor>
                    <Anchor
                        href={`https://vincentp791262.typeform.com/to/bffF4t?profile=${router.query.profile}`}
                        target="_blank"
                    >
                        <StyledButton
                            onClick={() => trackTableOfContent('Subscribe')}
                            primary
                        >
                            S'abonner
                        </StyledButton>
                    </Anchor>
                    {isLoggedIn && (
                        <StyledButton onClick={logout}>Logout</StyledButton>
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export default Header
