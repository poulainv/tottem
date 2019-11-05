import { ItemType } from '@generated/photon'
import querystring from 'querystring'
import { IItem } from '../interfaces'
import { SimpleFetch } from './fetchers'
import logger from '../logging'

export async function MovieDBSearch(
    title: string,
    year?: number,
    lang?: string
): Promise<IItem> {
    const text = await SimpleFetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
            process.env.MOVIEDB_API_KEY
        }${
            lang !== undefined ? `&language=${lang}` : ''
        }${`&${querystring.encode({
            query: title,
        })}`}&page=1&include_adult=true${
            year !== undefined ? `&year=${year}` : ''
        }`
    )
    logger.info(`Call done response!`)
    const response = JSON.parse(text)
    if (
        response === undefined ||
        response.total_results === undefined ||
        response.total_results === 0
    ) {
        logger.error(`No result for ${title}}`)
        return Promise.reject()
    }
    const best = response.results[0]
    return {
        title: best.title,
        author: '',
        description: best.overview,
        productUrl: `https://www.themoviedb.org/movie/${best.id}`,
        type: 'movie' as ItemType,
        imageUrl:
            best.poster_path &&
            `https://image.tmdb.org/t/p/w500${best.poster_path}`,
        meta: {
            releaseDate: best.release_date,
            voteAverage: best.vote_average,
        },
    }
}
