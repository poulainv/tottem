import * as React from 'react'
import { Image, Box } from 'grommet'
import Humanize from 'humanize-plus'

export interface IGithubMetasProps {
    starsCount: number
}

export function GithubMetas(props: IGithubMetasProps) {
    return (
        <Box direction="row" align="center">
            <Image src="/pictograms/github.svg" />
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

export interface IYoutubeMetasProps {
    viewCount: number
}

export function YoutubeMetas(props: IYoutubeMetasProps) {
    return (
        <Box direction="row" align="center">
            <Image src="/pictograms/youtube.svg" />
            <p
                style={{
                    lineHeight: '100%',
                    marginLeft: '8px',
                    fontSize: '14px',
                }}
            >
                {Humanize.compactInteger(props.viewCount, 1)} views
            </p>
        </Box>
    )
}
