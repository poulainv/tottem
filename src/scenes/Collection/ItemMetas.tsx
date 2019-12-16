import * as React from 'react'
import Humanize from 'humanize-plus'
import { Item } from '../../generated/types'

export interface IGithubMetasProps {
    starsCount: number
}

export function GithubMetas(props: IGithubMetasProps) {
    return (
        <div className="flex flex-row items-center">
            <img className="h-4" src="/pictograms/github.svg" />
            <div className="leading-none text-gray-800 px-2">
                {Humanize.compactInteger(props.starsCount, 1)} stars
            </div>
        </div>
    )
}

export interface IYoutubeMetasProps {
    viewCount: number
}

export function YoutubeMetas(props: IYoutubeMetasProps) {
    return (
        <div className="flex flex-row items-center">
            <img className="h-4" src="/pictograms/youtube.svg" />
            <div className="leading-none text-gray-800 px-2">
                {Humanize.compactInteger(props.viewCount, 1)} views
            </div>
        </div>
    )
}

export interface IMovieDBMetasProps {
    releaseDate: string
    voteAverage: number
}

export function MovieDBMetas(props: IMovieDBMetasProps) {
    return (
        <div className="flex flex-row items-center">
            <img className="h-4" src="/pictograms/moviedb.svg" height="24px" />
            <div className="leading-none text-gray-800 px-2">
                {new Date(props.releaseDate).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                })}{' '}
                • {props.voteAverage} avg. score
            </div>
        </div>
    )
}

export interface IItemMetasProps {
    item: Pick<Item, 'provider' | 'meta'>
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
