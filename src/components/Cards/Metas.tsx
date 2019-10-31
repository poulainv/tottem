import * as React from 'react'
import { Image, Box } from 'grommet'
import Humanize from 'humanize-plus'
import { Item } from '../../types'

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

export interface IItemMetasProps {
    item: Item
}

export function ItemMetas({ item }: IItemMetasProps) {
    if (item.provider && item.meta) {
        if (item.provider === 'github') {
            return <GithubMetas {...(item.meta as IGithubMetasProps)} />
        } else if (item.provider === 'youtube') {
            return <YoutubeMetas {...(item.meta as IYoutubeMetasProps)} />
        }
    }
    return <React.Fragment />
}