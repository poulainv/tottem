import { Box, Heading, ResponsiveContext, Text, Button } from 'grommet'
import React, { useContext } from 'react'
import { RoutingMatchParams } from '../../App'
import { UserProfile } from '../../types'

import PictureProfile from '../PictureProfile'
import Social from '../Social'

const Profile: React.FC<RoutingMatchParams> = params => {
    const size = useContext(ResponsiveContext)
    const isMobile = size === 'small'
    const userProfile: UserProfile = require(`./../../data/${params.profileId}/profile`)
        .default

    const Biography = (
        <Box width="large">
            <Text
                size={isMobile ? 'xsmall' : 'small'} // Paragraph & text are not responsive
            >
                {userProfile.biography}
            </Text>
        </Box>
    )

    return (
        <Box>
            <Box direction="row" justify="start" margin={{ bottom: 'medium' }}>
                <Box margin={{ right: 'medium' }} flex={false}>
                    <PictureProfile
                        size={size}
                        imageUrl={userProfile.pictureUrl}
                    />
                </Box>
                <Box flex={{ shrink: 2 }}>
                    <Box
                        direction="row-responsive"
                        align="center"
                        justify="between"
                    >
                        <Heading level={1} size="large">
                            {userProfile.firstname}
                        </Heading>
                        <Social />
                    </Box>
                    {!isMobile && Biography}
                </Box>
            </Box>
            {isMobile && Biography}
        </Box>
    )
}

export default Profile
