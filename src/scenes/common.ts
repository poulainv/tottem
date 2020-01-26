import { useEffect } from 'react'
import { initialize, pageview } from 'react-ga'

export type ItemType =
    | 'book'
    | 'album'
    | 'movie'
    | 'people'
    | 'video'
    | 'article'
    | 'repository'
    | 'website'
    | 'podcast'

export const useTracking = () => {
    useEffect(() => {
        initialize('UA-149517534-1', {
            testMode: process.env.NODE_ENV !== 'production',
        })
        pageview(window.location.pathname + window.location.search)
    })
}
