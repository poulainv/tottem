import { Box, Image, Button } from 'grommet'
import React from 'react'
import { ISocial } from '../types'
import { Youtube } from 'grommet-icons'

const Social: React.FC<ISocial> = props => {
    const pictoHeight = '16px'
    return (
        <Box direction="row" height={pictoHeight} gap="medium" align="end">
            {props.mail && (
                <Box>
                    <Button
                        plain={true}
                        href={'mailto:' + props.mail}
                        icon={
                            <Image
                                height="14px"
                                src={require('../static/pictograms/mail.svg')}
                                fit="contain"
                            />
                        }
                    />
                </Box>
            )}

            {props.github && (
                <Box>
                    <Button
                        target="_blank"
                        plain={true}
                        href={props.github}
                        icon={
                            <Image
                                height={pictoHeight}
                                src={require('../static/pictograms/github.svg')}
                                fit="contain"
                            />
                        }
                    />
                </Box>
            )}

            {props.linkedin && (
                <Box>
                    <Button
                        target="_blank"
                        plain={true}
                        href={props.linkedin}
                        icon={
                            <Image
                                height={pictoHeight}
                                src={require('../static/pictograms/linkedin.svg')}
                                fit="contain"
                            />
                        }
                    />
                </Box>
            )}

            {props.youtube && (
                <Box>
                    <Button
                        target="_blank"
                        plain={true}
                        href={props.youtube}
                        icon={<Youtube height={pictoHeight} />}
                    />
                </Box>
            )}
        </Box>
    )
}

export default Social
