import * as React from 'react'
import { Image, Box } from 'grommet'
import Humanize from 'humanize-plus'
import { Item } from '../../generated/types'

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

export interface IMovieDBMetasProps {
    releaseDate: string
    voteAverage: number
}

export function MovieDBMetas(props: IMovieDBMetasProps) {
    return (
        <Box direction="row" align="center">
            <Image src="/pictograms/moviedb.svg" height="24px" />
            <p
                style={{
                    lineHeight: '100%',
                    marginLeft: '8px',
                    fontSize: '14px',
                }}
            >
                {new Date(props.releaseDate).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                })}{' '}
                • {props.voteAverage} avg. score
            </p>
        </Box>
    )
}

export interface IItemMetasProps {
    item: Item
}

export function ItemMetas({ item }: IItemMetasProps) {
    if (item.provider && item.meta) {
        const meta = JSON.parse(item.meta)
        if (item.provider === 'github') {
            return <GithubMetas {...(meta as IGithubMetasProps)} />
        } else if (item.provider === 'youtube') {
            return <YoutubeMetas {...(meta as IYoutubeMetasProps)} />
        } else if (item.provider === 'moviedb') {
            return <MovieDBMetas {...(meta as IMovieDBMetasProps)} />
        }
    }
    return <React.Fragment />
}
