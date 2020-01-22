import querystring from 'querystring'
import SpotifyWebApi from 'spotify-web-api-node'
import logger from '../logging'
import { JSONFetch, SimpleFetch } from './fetchers'
import { GoogleBookResult } from './types/googlebook'

export const MOVIEDB_GENRES: { [i: number]: string } = {
    28: 'Action',
    12: 'Aventure',
    16: 'Animation',
    35: 'Comédie',
    80: 'Crime',
    99: 'Documentaire',
    18: 'Drame',
    10751: 'Familial',
    14: 'Fantastique',
    36: 'Histoire',
    27: 'Horreur',
    10402: 'Musique',
    9648: 'Mystère',
    10749: 'Romance',
    878: 'Science-Fiction',
    10770: 'Téléfilm',
    53: 'Thriller',
    10752: 'Guerre',
    37: 'Western',
}

interface IMovieDB {
    id: string
    title: string
    overview: string
    release_date: string
    poster_path: string
    vote_average: number
    genre_ids: number[]
}

export const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})

export async function SpotifySearch(query: string) {
    try {
        const res = await spotifyApi.searchAlbums(query)
        return res.body
    } catch {
        const accessToken = await spotifyApi.clientCredentialsGrant()
        spotifyApi.setAccessToken(accessToken.body.access_token)
        return (await spotifyApi.searchAlbums(query)).body
    }
}

export async function MovieDBSearch(
    title: string,
    year?: number,
    lang?: string
): Promise<IMovieDB[]> {
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
    const response = JSON.parse(text)
    if (
        response === undefined ||
        response.total_results === undefined ||
        response.total_results === 0
    ) {
        logger.error(`No result for ${title}}`)
        return Promise.reject()
    }
    return response.results
}

export async function GoogleBookSearch(
    query: string
): Promise<GoogleBookResult> {
    return JSONFetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&langRestrict=fr&maxResults=10&key=${process.env.GOOGLEBOOKS_API_KEY}`
    ).then(s => JSON.parse(s))
}
