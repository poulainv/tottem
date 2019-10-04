import * as React from 'react'
import { Box } from 'grommet'
import styled from 'styled-components'

const FootItem = styled.a`
    text-transform: uppercase;
    text-decoration: none;
    color: grey;
    font-size: 12px;
`

export function Footer(props: {}) {
    return (
        <Box pad={{ horizontal: 'large', vertical: 'medium' }}>
            <FootItem href="mailto:vincent.poulain2@gmail.com">
                Contact
            </FootItem>
        </Box>
    )
}
