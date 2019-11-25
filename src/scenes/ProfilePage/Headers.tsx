import { Box } from 'grommet'
import React from 'react'
import styled from 'styled-components'
import {
    MediumAndUp,
    SmallAndDown,
} from '../../components/ResponsiveStyledComponent'
import { PageHeader, PageSubheader } from '../../components/Typographies'
import { SocialFragment, UserBasicFragment } from '../../generated/types'
import PictureProfile from './PictureProfile'
import Social from './Social'

const Label = styled.div`
    color: #777777;
    box-shadow: rgb(217, 217, 217) 0px 0px 0px 1px;
    border-radius: 40px;
    padding: 0px 8px 0px 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: 170%;
    position: absolute;
    right: -90px;
    top: -16px;

    @media screen and (max-width: 600px) {
        right: auto;
        top: auto;
        left: 0px;
        bottom: -32px;
    }
`

const Headers: React.FC<UserBasicFragment & SocialFragment> = props => {
    return (
        <Box pad={{ horizontal: 'large' }} width="full">
            <Box direction="row" justify="start" margin={{ bottom: 'small' }}>
                <Box
                    margin={{ right: 'large' }}
                    flex={false}
                    responsive={false}
                >
                    <PictureProfile imageUrl={props.pictureUrl} />
                </Box>
                <Box width="full">
                    <Box direction="row" align="start" justify="between">
                        <Box direction="row">
                            <PageHeader style={{ position: 'relative' }}>
                                {props.firstname}
                                {props.label && <Label>{props.label}</Label>}
                            </PageHeader>
                        </Box>
                        <Social {...props} />
                    </Box>
                    <MediumAndUp>
                        <Box width="large" margin={{ bottom: 'none' }}>
                            <PageSubheader>{props.biography}</PageSubheader>
                        </Box>
                    </MediumAndUp>
                </Box>
            </Box>
            <SmallAndDown>
                <Box width="large" margin={{ bottom: 'medium' }}>
                    <PageSubheader>{props.biography}</PageSubheader>
                </Box>
            </SmallAndDown>
        </Box>
    )
}

export default Headers
