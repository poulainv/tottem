import { Box, Heading, ResponsiveContext } from 'grommet'
import * as React from 'react'
import styled from 'styled-components'
import Separator from '../components/Separator'
import artwork from '../static/images/artworks/landing-illustration-md.png'
import theme from '../theme'

const Header = styled(Heading)`
    font-size: 40px;
    line-height: 1.3;
    max-width: 550px;
    margin: 25px 0px 25px 0px;
    @media screen and (max-width: 600px) {
        font-size: 26px;
        line-height: 36px;
        text-align: center;
    }
`

const SubHeader = styled.p`
    font-size: 20px;
    line-height: 28px;
    margin: 25px 0px 25px 0px;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    @media screen and (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
        text-align: center;
    }
    strong {
        font-weight: 600;
    }
`

const CTAButton = styled.a`
    background-color: ${props => props.theme.global.colors.brand};
    color: white;
    padding: 20px 40px 20px 40px;
    border-radius: 40px;
    text-decoration: none;
    font-family: inherit;
    width: max-content;
    font-weight: 600;
    @media screen and (max-width: 600px) {
        padding: 15px 30px 15px 30px;
    }
`

const Artwork: React.FC = props => {
    const size = React.useContext(ResponsiveContext)
    const imageWidth =
        size === 'large' ? '624px' : size === 'medium' ? '624px' : '312px'
    return (
        <Box width={imageWidth}>
            <img
                alt="Artwork"
                style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                }}
                src={artwork}
            />
        </Box>
    )
}

const Landing: React.FunctionComponent = props => {
    const size = React.useContext(ResponsiveContext)
    const isMobile = size === 'small'

    return (
        <Box
            align="center"
            background="white"
            height={size === 'large' ? 'full' : 'none'}
        >
            <Box height="xsmall" fill="horizontal">
                <Box margin={{ horizontal: 'large' }}>
                    <Heading> TOTTEM </Heading>
                </Box>
            </Box>

            <Box
                direction="row-responsive"
                justify="between"
                height={isMobile ? 'none' : 'full'}
            >
                <Box
                    align={isMobile ? 'center' : 'start'}
                    width="700px"
                    pad={{ horizontal: 'large' }}
                    margin={{ top: isMobile ? 'none' : 'large' }}
                >
                    <Box align={isMobile ? 'center' : 'start'}>
                        <Header level={2}>
                            The knowledge platform for community
                        </Header>
                        {isMobile ? (
                            <Artwork />
                        ) : (
                            <Box margin={{ vertical: 'medium' }}>
                                <Separator
                                    color={theme.global.colors['accent-1']}
                                />
                            </Box>
                        )}
                        <SubHeader>
                            Internet was built to support{' '}
                            <strong> knowledge sharing. </strong>
                            <br />
                            <br />
                            However, with the massive usage of AI recommendation
                            systems{' '}
                            <strong>
                                we feel overwhelmed with poor and clickbait
                                content.
                            </strong>
                            <br /> <br />
                            <em> Relevant content is getting hard to find? </em>
                            <br /> <br />
                            Heed is a human centered platform where enthusiastic
                            people and organizations create{' '}
                            <strong>
                                relevant collections of hand-picked items.
                            </strong>
                        </SubHeader>
                    </Box>

                    <Box margin={{ top: 'large', bottom: '40px' }}>
                        <CTAButton href="http://eepurl.com/gE44Sz">
                            Keep me in the loop
                        </CTAButton>
                    </Box>
                </Box>
                {!isMobile && <Artwork />}
            </Box>
        </Box>
    )
}

export default Landing
