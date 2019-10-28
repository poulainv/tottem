import { Anchor, Box, ResponsiveContext } from 'grommet'
import Link from 'next/link'
import React from 'react'
import { Beta, Logo } from '../Logo'
import { StyledButton } from '../Button'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
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
                <Box direction="row">
                    <Anchor
                        href="https://vincentp791262.typeform.com/to/LOiv5v"
                        target="_blank"
                    >
                        <StyledButton>Nouvelle collection</StyledButton>
                    </Anchor>
                    <Anchor
                        href={`https://vincentp791262.typeform.com/to/bffF4t?profile=${router.query.profile}`}
                        target="_blank"
                        style={{ marginLeft: '16px' }}
                    >
                        <StyledButton primary>S'abonner</StyledButton>
                    </Anchor>
                </Box>
            </Box>
        </Box>
    )
}

export default Header
