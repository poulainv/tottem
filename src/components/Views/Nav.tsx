import { Box, Heading, ResponsiveContext, Text } from 'grommet'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserProfile } from '../../types'
import PictureProfile from '../PictureProfile'
import Social from '../Social'

const Label = styled.div`
    color: #555555;
    border: 1px #555555 solid;
    border-radius: 40px;
    padding: 0px 6px 0px 6px;
    font-weight: 500;
    margin: 0px;
    font-size: 12px;
    height: fit-content;
    width: fit-content;
`

const ProfileDescription: React.FC<UserProfile> = props => {
    const size = useContext(ResponsiveContext)
    const isMobile = size === 'small'

    const Biography = (
        <Box width="large" margin={{ bottom: isMobile ? 'medium' : 'none' }}>
            <Text size={isMobile ? 'small' : 'medium'}>{props.biography}</Text>
        </Box>
    )

    return (
        <Box pad={{ horizontal: 'large' }}>
            <Box direction="row" justify="start" margin={{ bottom: 'large' }}>
                <Box
                    margin={{ right: 'large' }}
                    flex={false}
                    responsive={false}
                >
                    <PictureProfile size={size} imageUrl={props.pictureUrl} />
                </Box>
                <Box width="full">
                    <Box direction="row" align="center" justify="between">
                        <Box direction="row">
                            <Heading level={1} size="large">
                                {props.firstname}
                            </Heading>
                            {props.label && <Label>{props.label}</Label>}
                        </Box>
                        <Social {...props.social} />
                    </Box>
                    {!isMobile && Biography}
                </Box>
            </Box>
            {isMobile && Biography}
        </Box>
    )
}

export default ProfileDescription
