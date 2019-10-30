import * as React from 'react'
import { Image, Box } from 'grommet'
import Humanize from 'humanize-plus'

export interface IGithubMetasProps {
    starsCount: number
}

export function GithubMetas(props: IGithubMetasProps) {
    return (
        <Box
            direction="row"
            style={{
                marginLeft: '6px',
            }}
        >
            <p
                style={{
                    lineHeight: '100%',
                    marginLeft: '8px',
                    fontSize: '14px',
                }}
            >
                •
            </p>
            <Image
                src="/pictograms/github.svg"
                style={{
                    marginLeft: '8px',
                }}
            />
            <p
                style={{
                    lineHeight: '100%',
                    marginLeft: '8px',
                    fontSize: '14px',
                }}
            >
                {Humanize.compactInteger(props.starsCount, 1)} stars
            </p>
        </Box>
    )
}
