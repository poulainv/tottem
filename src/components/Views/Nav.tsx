import { Box, Heading, ResponsiveContext, Text, Button } from 'grommet'
import React, { useContext } from 'react'
import { RoutingMatchParams } from '../../App'
import { UserProfile } from '../../types'
import Separator from '../Separator'

import theme from '../../theme'

import PictureProfile from '../PictureProfile'

const Sidenav: React.FC<RoutingMatchParams> = params => {
    const size = useContext(ResponsiveContext)
    const isMobile = size === 'small'
    const userProfile: UserProfile = require(`./../../data/${params.profileId}/profile`)
        .default

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
                            imageUrl={userProfile.pictureUrl}
                        />
                    </Box>
                    <Box>
                        <Heading level={1} size="large" margin="none">
                            {userProfile.firstname}
                        </Heading>
                        {userProfile.website && (
                            <Button
                                target="_blank"
                                href={userProfile.website}
                                label={userProfile.website}
                                plain={true}
                            />
                        )}
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
                        {userProfile.biography}
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidenav
