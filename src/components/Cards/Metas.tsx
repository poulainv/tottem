import * as React from 'react'
import { Image, Box } from 'grommet'

export interface IGithubMetasProps {
    starsCount: number
}

export function GithubMetas(props: IGithubMetasProps) {
    return (
        <Box direction="row">
            <Image src="/pictograms/github.svg" />
            <p style={{ marginLeft: '8px', fontSize: '14px' }}>
                {props.starsCount} stars
            </p>
        </Box>
    )
}
