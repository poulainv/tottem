import { Photon } from '@generated/photon'
import { enumType, mutationType, objectType, queryType, stringArg } from 'nexus'
import { IItem } from './interfaces'
import { inferNewItemFromUrl } from './parsers'

const photon = new Photon()

export const Mutation = mutationType({
    definition(t) {
        t.crud.createOneSection()
        t.crud.createOneCollection()
        t.field('createItem', {
            type: 'Item',
            args: {
                url: stringArg({ required: true }),
                collectionId: stringArg({ required: true }),
                overridedTitle: stringArg(),
            },
            async resolve(_, { url, overridedTitle, collectionId }, ctx) {
                return inferNewItemFromUrl(url).then((item: IItem) => {
                    return photon.items.create({
                        data: {
                            title: overridedTitle || item.title,
                            author: item.author,
                            type: item.type,
                            productUrl: item.productUrl,
                            imageUrl: item.imageUrl,
                            collection: {
                                connect: {
                                    id: collectionId,
                                },
                            },
                        },
                    })
                })
            },
        })
    },
})

export const Query = queryType({
    definition(t) {
        t.crud.user()
        t.crud.collections({
            ordering: { date: true },
            filtering: { owner: true, section: true },
            pagination: true,
        })
    },
})

export const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id()
        t.model.slug()
        t.model.biography()
        t.model.profile()
        t.model.pictureUrl()
        t.model.label()
        t.model.firstname()
        t.model.sections()
    },
})

export const Profile = objectType({
    name: 'Profile',
    definition(t) {
        t.model.website()
        t.model.linkedin()
        t.model.youtube()
        t.model.mail()
    },
})

export const Section = objectType({
    name: 'Section',
    definition(t) {
        t.model.id()
        t.model.index()
        t.model.name()
        t.model.collections()
    },
})

export const Collection = objectType({
    name: 'Collection',
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.date()
        t.model.detail()
        t.model.items()
        t.model.owner()
        t.model.section()
    },
})

export const Item = objectType({
    name: 'Item',
    definition(t) {
        t.model.id()
        t.model.author()
        t.model.title()
        t.model.imageUrl()
        t.model.productUrl()
        t.model.comment()
        t.model.type()
    },
})

const ItemType = enumType({
    name: 'ItemType',
    members: [
        'book',
        'album',
        'movie',
        'people',
        'video',
        'article',
        'podcast',
    ],
})
