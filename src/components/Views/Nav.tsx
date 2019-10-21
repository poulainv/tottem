import { Box, Heading, Text } from 'grommet'
import React from 'react'
import styled from 'styled-components'
import { UserProfile } from '../../types'
import PictureProfile from '../PictureProfile'
import { MediumAndUp, SmallAndDown } from '../ResponsiveStyledComponent'
import Social from '../Social'

const Label = styled.div`
    color: #777777;
    box-shadow: rgb(217, 217, 217) 0px 0px 0px 1px;
    border-radius: 40px;
    padding: 0px 8px 0px 8px;
    font-weight: 500;
    margin: 0px;
    font-size: 12px;
    height: fit-content;
    width: fit-content;
`

const Biography = styled(Text)`
    font-size: 16px;

    @media screen and (max-width: 812px) {
        font-size: 14px;
        line-height: 20px;
    }
`

const ProfileDescription: React.FC<UserProfile> = props => {
    return (
        <Box pad={{ horizontal: 'large' }} width="full">
            <Box direction="row" justify="start" margin={{ bottom: 'large' }}>
                <Box
                    margin={{ right: 'large' }}
                    flex={false}
                    responsive={false}
                >
                    <PictureProfile imageUrl={props.pictureUrl} />
                </Box>
                <Box width="full">
                    <Box direction="row" align="start" justify="between">
                        <Box direction="row-responsive">
                            <Heading level={1} size="large">
                                {props.firstname}
                            </Heading>
                            {props.label && <Label>{props.label}</Label>}
                        </Box>
                        <Social {...props.social} />
                    </Box>
                    <MediumAndUp>
                        <Box width="large" margin={{ bottom: 'none' }}>
                            <Biography>{props.biography}</Biography>
                        </Box>
                    </MediumAndUp>
                </Box>
            </Box>
            <SmallAndDown>
                <Box width="large" margin={{ bottom: 'medium' }}>
                    <Biography>{props.biography}</Biography>
                </Box>
            </SmallAndDown>
        </Box>
    )
}

export default ProfileDescription
