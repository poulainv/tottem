import { Box, Heading, ResponsiveContext, Text } from 'grommet'
import React, { useContext, Fragment } from 'react'
import { RoutingMatchParams } from '../../App'
import { UserProfile } from '../../types'

import PictureProfile from '../PictureProfile'
import Social from '../Social'

const ProfileDescription: React.FC<RoutingMatchParams> = params => {
    const size = useContext(ResponsiveContext)
    const isMobile = size === 'small'
    const userProfile: UserProfile = require(`./../../data/${params.profileId}/profile`)
        .default

    const Biography = (
        <Box width="large">
            <Text size={isMobile ? 'small' : 'medium'}>
                {userProfile.biography}
            </Text>
        </Box>
    )

    return (
        <Fragment>
            <Box direction="row" justify="start" margin={{ bottom: 'medium' }}>
                <Box
                    margin={{ right: 'large' }}
                    flex={false}
                    responsive={false}
                >
                    <PictureProfile
                        size={size}
                        imageUrl={userProfile.pictureUrl}
                    />
                </Box>
                <Box width="full">
                    <Box
                        direction="row-responsive"
                        align="center"
                        justify="between"
                    >
                        <Heading level={1} size="large">
                            {userProfile.firstname}
                        </Heading>
                        <Social {...userProfile.social} />
                    </Box>
                    {!isMobile && Biography}
                </Box>
            </Box>
            {isMobile && Biography}
        </Fragment>
    )
}

export default ProfileDescription
