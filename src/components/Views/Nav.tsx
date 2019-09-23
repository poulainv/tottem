import { Box, Heading, Markdown, ResponsiveContext, Paragraph } from 'grommet'
import React, { useContext } from 'react'
import Separator from '../Separator'

import theme from '../../theme'

import PictureProfile from '../PictureProfile'
import { UserProfile } from '../../types'

const Sidenav: React.FC<UserProfile> = props => {
    const size = useContext(ResponsiveContext)
    const isMobile = size === 'small'
    const fontColor = isMobile ? 'white' : 'dark-1'
    return (
        <Box align="center" basis="20%">
            <Box direction="column" pad={{ horizontal: 'medium' }}>
                <Box
                    direction={isMobile ? 'row' : 'column'}
                    align={isMobile ? 'center' : 'start'}
                    justify="start"
                >
                    <Box margin={{ right: 'large' }}>
                        <PictureProfile
                            size={size}
                            imageUrl={props.pictureUrl}
                        />
                    </Box>
                    <Box>
                        <Heading
                            level={1}
                            color={fontColor}
                            size="large"
                            margin="none"
                        >
                            Hello,
                        </Heading>
                        <Heading
                            level={3}
                            size="small"
                            color={fontColor}
                            margin="none"
                        >
                            {props.firstname}
                        </Heading>
                        <Box
                            direction="column"
                            margin={{ top: 'medium', bottom: '10px' }}
                        >
                            <Separator
                                size={size}
                                color={theme.global.colors['accent-1']}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Paragraph
                        size={isMobile ? 'small' : 'medium'} // Paragraph & text are not responsive
                        color={fontColor}
                    >
                        <Markdown>{props.biography}</Markdown>
                    </Paragraph>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidenav
