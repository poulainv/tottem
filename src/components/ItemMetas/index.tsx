import * as React from 'react'
import Humanize from 'humanize-plus'
import { Item } from '../../generated/types'
import Github from './github.svg'
import MovieDB from './moviedb.svg'
import Youtube from './youtube.svg'
import classnames from 'classnames'

export interface IGithubMetasProps {
    className?: string
    starsCount: number
}

export function GithubMetas(props: IGithubMetasProps) {
    return (
        <div
            className={classnames(
                props.className,
                'flex flex-row items-center'
            )}
        >
            <Github height={14} width={14} />
            <div className="leading-none text-gray-800 px-2">
                {Humanize.compactInteger(props.starsCount, 1)} stars
            </div>
        </div>
    )
}

export interface IYoutubeMetasProps {
    className?: string
    viewCount: number
}

export function YoutubeMetas(props: IYoutubeMetasProps) {
    return (
        <div
            className={classnames(
                props.className,
                'flex flex-row items-center'
            )}
        >
            <Youtube height={14} width={14} />
            <div className="leading-none text-gray-800 px-2">
                {Humanize.compactInteger(props.viewCount, 1)} views
            </div>
        </div>
    )
}

export interface IMovieDBMetasProps {
    className?: string
    releaseDate: string
    voteAverage: number
}

export function MovieDBMetas(props: IMovieDBMetasProps) {
    return (
        <div
            className={classnames(
                props.className,
                'flex flex-row items-center'
            )}
        >
            <MovieDB height={14} width={14} />
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
    className?: string
    item: Pick<Item, 'provider' | 'meta'>
}

export function ItemMetas({ item, className }: IItemMetasProps) {
    if (item.provider && item.meta) {
        const meta = JSON.parse(item.meta)
        if (item.provider === 'github') {
            return (
                <GithubMetas
                    className={className}
                    {...(meta as IGithubMetasProps)}
                />
            )
        } else if (item.provider === 'youtube') {
            return (
                <YoutubeMetas
                    className={className}
                    {...(meta as IYoutubeMetasProps)}
                />
            )
        } else if (item.provider === 'moviedb') {
            return (
                <MovieDBMetas
                    className={className}
                    {...(meta as IMovieDBMetasProps)}
                />
            )
        }
    }
    return <React.Fragment />
}
