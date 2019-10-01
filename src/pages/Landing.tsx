import * as React from 'react'
import { Box, Heading, Button, ResponsiveContext } from 'grommet'
import Separator from '../components/Separator'
import artwork from '../static/images/artworks/landing-illustration.png'
import theme from '../theme'

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
                        <Heading
                            level={2}
                            textAlign={isMobile ? 'center' : 'start'}
                            style={{
                                fontSize: isMobile ? '26px' : '48px',
                                lineHeight: isMobile ? '36px' : '64px',
                            }}
                        >
                            The knowledge platform for community
                        </Heading>

                        <Box margin={{ vertical: 'medium' }}>
                            <Separator
                                size="large"
                                color={theme.global.colors['accent-1']}
                            />
                        </Box>
                        <Heading
                            level={3}
                            textAlign={isMobile ? 'center' : 'start'}
                            style={{
                                fontSize: isMobile ? '16px' : '20px',
                                lineHeight: isMobile ? '20px' : '28px',
                            }}
                        >
                            Internet was built to support
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
                        </Heading>
                    </Box>
                    {isMobile && artworkBox}
                    <Box margin={{ top: 'large', bottom: '40px' }}>
                        <Button
                            style={{
                                fontSize: '18px',
                                color: 'white',
                            }}
                            fill={true}
                            primary={true}
                            href="http://eepurl.com/gE44Sz"
                            label="Keep me in the loop"
                        />
                    </Box>
                </Box>
                {!isMobile && artworkBox}
            </Box>
        </Box>
    )
}

export default Landing
