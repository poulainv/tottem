import { Box, Heading, ResponsiveContext, Text, Button } from 'grommet'
import React, { useContext } from 'react'
import Separator from '../Separator'

import theme from '../../theme'

import PictureProfile from '../PictureProfile'
import { UserProfile } from '../../types'
import Social from '../Social'

const Sidenav: React.FC<UserProfile> = props => {
    const size = useContext(ResponsiveContext)
    const isMobile = size === 'small'
    return (
        <Box align="center" basis="20%" width={{ min: '350px' }}>
            <Box
                direction="column"
                pad={{ horizontal: isMobile ? 'xlarge' : 'medium' }}
            >
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
                        <Heading level={1} size="large" margin="none">
                            {props.firstname}
                        </Heading>
                        {props.website && (
                            <Button
                                target="_blank"
                                href={props.website}
                                label={props.website}
                                plain={true}
                            />
                        )}
                        {/* <Social /> */}
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
                <Box margin={{ vertical: 'medium' }}>
                    <Text
                        size={isMobile ? 'small' : 'medium'} // Paragraph & text are not responsive
                    >
                        {props.biography}
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidenav
