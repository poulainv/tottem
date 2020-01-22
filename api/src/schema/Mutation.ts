import {
    CollectionCreateOneWithoutCollectionInput,
    UserCreateOneWithoutInboxOwnerInput,
} from '@prisma/photon'
import cuid from 'cuid'
import { booleanArg, idArg, intArg, mutationType, stringArg } from 'nexus'
import { Context } from '../context'
import { getInitialSections } from '../data/new-user'
import { createNewItemFromSearch, inferNewItemFromUrl } from '../parsers'

interface Positonnable {
    position: number
}

export function reAssignPosition<T extends Positonnable>(
    array: T[],
    startIndex: number,
    endIndex: number
) {
    const result = Array.from(array)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result.flatMap((x, index) => {
        if (index === x.position) {
            return []
        } else {
            return {
                ...x,
                position: index,
            }
        }
    })
}

export const Mutation = mutationType({
    definition(t) {
        t.crud.updateOneSection()
        t.crud.createOneUser()
        t.crud.updateOneUser()
        t.crud.updateOneItem()
        t.crud.updateOneCollection()
        t.field('createNewUser', {
            type: 'User',
            args: {
                slug: stringArg({ required: true }),
                authUserId: stringArg({ required: true }),
                pictureUrl: stringArg({ required: true }),
                firstname: stringArg({ required: true }),
            },
            async resolve(
                _,
                { slug, authUserId, pictureUrl, firstname },
                ctx: Context
            ) {
                return ctx.photon.users.create({
                    data: {
                        firstname,
                        pictureUrl,
                        slug,
                        authUserId,
                        sections: getInitialSections(authUserId),
                    },
                })
            },
        })
        t.field('createEmptyCollection', {
            type: 'Collection',
            args: {
                sectionId: idArg({ required: true }),
            },
            async resolve(_, { sectionId }, ctx: Context) {
                const user = await ctx.user
                if (user === undefined) {
                    return Promise.reject('User not authenticated')
                }
                const id = cuid()
                return ctx.photon.collections.create({
                    data: {
                        id,
                        owner: {
                            connect: {
                                authUserId: user.auth0Id,
                            },
                        },
                        section: {
                            connect: {
                                id: sectionId,
                            },
                        },
                        slug: `new-collection-${id}`,
                    },
                })
            },
        })
        t.field('createEmptySection', {
            type: 'Section',
            async resolve(_, __, ctx: Context) {
                const user = await ctx.user
                if (user === undefined) {
                    return Promise.reject('User not authenticated')
                }
                const sectionsCount = (
                    await ctx.photon.sections.findMany({
                        where: { AND: { owner: { authUserId: user.auth0Id } } },
                    })
                ).length
                const id = cuid()
                return ctx.photon.sections.create({
                    data: {
                        id,
                        owner: {
                            connect: {
                                authUserId: user.auth0Id,
                            },
                        },
                        slug: `new-space-${id}`,
                        index: sectionsCount,
                    },
                })
            },
        })
        t.field('changeItemPosition', {
            type: 'Item',
            list: true,
            description: `Mutation changing the position of an item from his $oldIndex to the $newIndex.
            It takes *indexes* (not position) and return changed items with new position.
            `,
            args: {
                collectionId: idArg({ required: true }),
                oldIndex: intArg({ required: true }),
                newIndex: intArg({ required: true }),
            },
            async resolve(
                _,
                { oldIndex, newIndex, collectionId },
                ctx: Context
            ) {
                const items = (
                    await ctx.photon.items.findMany({
                        where: {
                            collection: { id: collectionId },
                            isDeleted: false,
                        },
                        select: { id: true, position: true },
                        // this order is related to items order on the page
                        // Should be nested order not supported by photon yet FIXME
                        orderBy: { createdAt: 'desc' },
                    })
                ).sort((a, b) => a.position - b.position) // FIXME here!

                const newIndexedItems = reAssignPosition(
                    items,
                    oldIndex,
                    newIndex
                )
                const updates: Array<ReturnType<
                    typeof ctx.photon.items.update
                >> = []
                for (const item of newIndexedItems) {
                    updates.push(
                        ctx.photon.items.update({
                            data: {
                                position: item.position,
                            },
                            where: { id: item.id },
                        })
                    )
                }
                await Promise.all(updates)
                return ctx.photon.items.findMany({
                    where: {
                        OR: newIndexedItems.map(x => {
                            return {
                                id: x.id,
                            }
                        }),
                    },
                })
            },
        })
        t.field('createItemFromSearch', {
            type: 'Item',
            args: {
                id: stringArg({ required: true }),
                kind: stringArg({ required: true }),
                collectionId: stringArg(),
                inbox: booleanArg(),
            },
            async resolve(_, { id, kind, collectionId, inbox }, ctx: Context) {
                return createNewItemFromSearch(id, kind).then(async item => {
                    const user = await ctx.user
                    if (user === undefined) {
                        return Promise.reject('User not authenticated')
                    }
                    let connect
                    if (collectionId) {
                        connect = {
                            collection: {
                                connect: {
                                    id: collectionId,
                                },
                            },
                        }
                    } else if (inbox) {
                        connect = {
                            inboxOwner: {
                                connect: {
                                    authUserId: user.auth0Id,
                                },
                            },
                        }
                    }
                    return ctx.photon.items.create({
                        data: {
                            title: item.title,
                            author: item.author,
                            type: item.type,
                            meta: item.meta && JSON.stringify(item.meta), // FIXME JSON fields not supported yet
                            provider: item.provider,
                            productUrl: item.productUrl,
                            imageUrl: item.imageUrl,
                            ...connect,
                        },
                    })
                })
            },
        })
        t.field('createItemFromUrl', {
            type: 'Item',
            args: {
                url: stringArg({ required: true }),
                collectionId: stringArg(),
                inbox: booleanArg(),
            },
            async resolve(_, { url, collectionId, inbox }, ctx: Context) {
                return inferNewItemFromUrl(url).then(async item => {
                    const user = await ctx.user
                    if (user === undefined) {
                        return Promise.reject('User not authenticated')
                    }
                    let connect: {
                        collection?: CollectionCreateOneWithoutCollectionInput
                        inboxOwner?: UserCreateOneWithoutInboxOwnerInput
                    } = {}

                    if (collectionId) {
                        connect = {
                            collection: {
                                connect: {
                                    id: collectionId,
                                },
                            },
                        }
                    } else if (inbox) {
                        connect = {
                            inboxOwner: {
                                connect: {
                                    authUserId: user.auth0Id,
                                },
                            },
                        }
                    }
                    return ctx.photon.items.create({
                        data: {
                            title: item.title,
                            author: item.author,
                            type: item.type,
                            meta: item.meta && JSON.stringify(item.meta), // FIXME JSON fields not supported yet
                            provider: item.provider,
                            productUrl: item.productUrl,
                            imageUrl: item.imageUrl,
                            ...connect,
                        },
                    })
                })
            },
        })
    },
})
