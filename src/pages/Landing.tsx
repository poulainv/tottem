import { Box, Heading, ResponsiveContext } from 'grommet'
import * as React from 'react'
import styled from 'styled-components'
import Separator from '../components/Separator'
import artwork from '../static/images/artworks/landing-illustration.png'
import theme from '../theme'

const Header = styled(Heading)`
    font-size: 48px;
    line-height: 64px;
    @media screen and (max-width: 600px) {
        font-size: 26px;
        line-height: 36px;
        text-align: center;
    }
`

const SubHeader = styled(Heading)`
    font-size: 20px;
    line-height: 28px;
    @media screen and (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
        text-align: center;
    }
`

const CTAButton = styled.a`
    background-color: ${props => props.theme.global.colors.brand};
    color: white;
    padding: 20px 40px 20px 40px;
    border-radius: 10px;
    text-decoration: none;
    font-family: inherit;
    @media screen and (max-width: 600px) {
        padding: 15px 30px 15px 30px;
    }
`

const Landing: React.FunctionComponent = props => {
    const size = React.useContext(ResponsiveContext)
    const imageWidth =
        size === 'large' ? '678px' : size === 'medium' ? '678px' : '312px'
    const isMobile = size === 'small'

    const artworkBox = (
        <Box width={imageWidth}>
            <img
                style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                }}
                src={artwork}
            />
        </Box>
    )

    return (
        <Box
            align="center"
            background="white"
            height={size === 'large' ? 'full' : 'none'}
        >
            <Box height="xsmall" fill="horizontal">
                <Box margin={{ horizontal: 'large' }}>
                    <Heading> HEED </Heading>
                </Box>
            </Box>
            <Box
                direction="row-responsive"
                justify="between"
                height={isMobile ? 'none' : 'full'}
            >
                <Box
                    width="large"
                    align="center"
                    pad={{ horizontal: 'large' }}
                    margin={{ top: isMobile ? 'none' : 'large' }}
                >
                    <Box align={isMobile ? 'center' : 'start'}>
                        <Header level={2}>
                            The knowledge platform for community
                        </Header>

                        <Box margin={{ vertical: 'medium' }}>
                            <Separator
                                size="large"
                                color={theme.global.colors['accent-1']}
                            />
                        </Box>
                        <SubHeader level={3}>
                            Internet was built to support{' '}
                            <strong> knowledge sharing. </strong>
                            <br />
                            <br />
                            However, with the massive usage of recommendation
                            systems{' '}
                            <strong>
                                we feel overwhelmed with poor and clickbait
                                content.
                            </strong>
                            <br /> <br />
                            <em> Relevant content is getting hard to find? </em>
                            <br /> <br />
                            Heed is a human-first platform where enthusiasts
                            people and organizations create{' '}
                            <strong>
                                relevant collections of hand-picked items.
                            </strong>
                        </SubHeader>
                    </Box>
                    {isMobile && artworkBox}
                    <Box margin={{ top: 'large', bottom: '40px' }}>
                        <CTAButton href="http://eepurl.com/gE44Sz">
                            Keep me in the loop
                        </CTAButton>
                    </Box>
                </Box>
                {!isMobile && artworkBox}
            </Box>
        </Box>
    )
}

export default Landing
