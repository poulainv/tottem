import { Box, Heading, Markdown } from 'grommet'
import React from 'react'
import Separator from './Separator'

import theme from '../../theme'

import PictureProfile from './PictureProfile'
import Social from './Social'
import { UserProfile } from '../../types'

const Sidenav: React.FC<UserProfile> = props => {
    return (
        <Box direction="column">
            <Box width="xmedium">
                <Box direction="column">
                    <Box direction="column">
                        <PictureProfile imageUrl={props.pictureUrl} />
                        <Heading
                            level={1}
                            color="dark-1"
                            margin={{ top: '16px', bottom: '0px' }}
                        >
                            Hello,
                        </Heading>
                        <Heading
                            level={2}
                            size="large"
                            color="dark-1"
                            margin={{ vertical: '0px' }}
                        >
                            {props.firstname}
                        </Heading>
                    </Box>
                </Box>
                <Box
                    direction="column"
                    margin={{ top: '40px', bottom: '10px' }}
                >
                    <Separator color={theme.global.colors.brand} />
                </Box>
                <Heading level={3} size="large" color="dark-1">
                    <Markdown>{props.biography}</Markdown>
                </Heading>
                <Social />
            </Box>
        </Box>
    )
}

export default Sidenav
