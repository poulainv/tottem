import { Box, Heading } from 'grommet'
import { MailOption } from 'grommet-icons'
import Link from 'next/link'
import * as React from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import {
    LargeResponsiveArtwork,
    MobileArtwork,
} from '../components/Illustration'
import Logo from '../components/Logo'
import {
    LargeAndUp,
    MediumAndUp,
    SmallAndDown,
} from '../components/ResponsiveStyledComponent'
import Separator from '../components/Separator'
import { accent500, accent900, brand500 } from '../theme'

const Header = styled(Heading)`
    font-size: 52px;
    line-height: 1.3;
    font-weight: 700;
    max-width: 550px;
    margin: 25px 0px 25px 0px;
    font-family: 'Poiret One';
    width: 100%;

    @media screen and (max-width: 812px) {
        font-size: 26px;
        line-height: 36px;
        text-align: center;
    }
`

const SubHeader = styled.p`
    font-size: 20px;
    line-height: 28px;
    margin: 25px 0px 25px 0px;
    font-weight: 400;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    @media screen and (max-width: 812px) {
        font-size: 16px;
        line-height: 22px;
        text-align: center;
    }
    strong {
        font-weight: 700;
    }
`

const CTAButton = styled.a`
    background-color: ${accent500};
    color: white;
    padding: 20px 40px 20px 40px;
    border-radius: 40px;
    text-decoration: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 18px;
    width: max-content;
    font-weight: 600;
    @media screen and (max-width: 812px) {
        font-size: 16px;
        padding: 15px 30px 15px 30px;
    }

    :hover {
        background-color: ${accent900};
    }
`

const LandingLeftPanel = styled(Box)`
    width: 700px;
    margin-top: 12px;
    @media screen and (max-width: 812px) {
        height: 100%;
        align-items: center;
        margin-top: 0px;
    }
`

const handleCTA = () => {
    ReactGA.initialize('UA-149517534-1')
    ReactGA.event({
        category: 'Signup',
        action: 'Click on keepme',
    })
}

const Landing: React.FC = props => {
    return (
        <Box align="center" background="white">
            <Box
                direction="row"
                justify="between"
                align="center"
                height="xsmall"
                fill="horizontal"
            >
                <Box margin={{ horizontal: 'large' }}>
                    <Logo>Tottem</Logo>
                </Box>
                <Box margin={{ horizontal: 'large' }}>
                    <Link href="/landing">
                        <MailOption />
                    </Link>
                </Box>
            </Box>

            <Box direction="row-responsive" justify="between">
                <LandingLeftPanel pad={{ horizontal: 'large' }}>
                    <Header level={2}>
                        The knowledge platform for community
                    </Header>
                    <SmallAndDown>
                        <MobileArtwork />
                    </SmallAndDown>
                    <LargeAndUp>
                        <Box margin={{ vertical: 'medium' }}>
                            <Separator color={brand500} />
                        </Box>
                    </LargeAndUp>
                    <SubHeader>
                        Internet was built to support{' '}
                        <strong> knowledge sharing. </strong>
                        <br />
                        <br />
                        However, with the massive usage of AI recommendation
                        systems{' '}
                        <strong>
                            we feel overwhelmed with poor and clickbait content.
                        </strong>
                        <br /> <br />
                        <em> Relevant content is getting hard to find? </em>
                        <br /> <br />
                        Tottem is a human centered platform where enthusiastic
                        people and organizations create{' '}
                        <strong>
                            relevant collections of hand-picked items.
                        </strong>
                    </SubHeader>

                    <CTAButton
                        href="http://eepurl.com/gE44Sz"
                        onClick={handleCTA}
                        style={{
                            marginTop: '24px',
                            marginBottom: '40px',
                        }}
                    >
                        Keep me in the loop
                    </CTAButton>
                </LandingLeftPanel>
                <MediumAndUp>
                    <LargeResponsiveArtwork />
                </MediumAndUp>
            </Box>
        </Box>
    )
}

export default Landing
