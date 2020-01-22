import { queryType, stringArg } from 'nexus'
import { Context } from '../context'
import {
    GoogleBookSearch,
    MovieDBSearch,
    SpotifySearch,
} from '../parsers/searchers'

export const Query = queryType({
    definition(t) {
        t.crud.user()
        t.crud.collection()
        t.crud.section()
        t.crud.items({
            filtering: { collection: true, isDeleted: true },
            ordering: { position: true },
        })
        t.crud.sections({
            filtering: { owner: true, isDeleted: true, index: true },
            ordering: { createdAt: true },
        })
        t.crud.collections({
            ordering: { createdAt: true },
            filtering: { owner: true, section: true, isDeleted: true },
            pagination: true,
        })
        t.field('inbox', {
            type: 'Inbox',
            nullable: true,
            description: 'Inbox user relative content',
            resolve: (_, {}) => {
                return {}
            },
        })
        t.field('search', {
            type: 'SearchItem',
            args: {
                q: stringArg({ required: true }),
                kind: stringArg({ required: true }),
            },
            list: true,
            async resolve(_, { q, kind }, ctx: Context) {
                if (kind === 'movie') {
                    const res = await MovieDBSearch(q, undefined, 'fr')
                    return res.map(x => {
                        return {
                            id: x.id,
                            title: x.title,
                            author: x.release_date,
                            type: 'movie',
                        }
                    })
                } else if (kind === 'book') {
                    const res = await GoogleBookSearch(q)
                    return res.items.map(x => {
                        return {
                            id: x.id,
                            title: x.volumeInfo.title,
                            author:
                                x.volumeInfo.authors && x.volumeInfo.authors[0],
                            type: 'book',
                        }
                    })
                } else if (kind === 'album') {
                    const res = await SpotifySearch(q)
                    return (
                        res?.albums?.items?.map(x => {
                            return {
                                id: x.id,
                                title: x.name,
                                author: x.artists
                                    .map(artist => artist.name)
                                    .join(', '),
                                type: 'album',
                            }
                        }) || []
                    )
                }
                return Promise.reject(`Kind ${kind} not supported`)
            },
        })
    },
})
