import { queryType, objectType, enumType, mutationType, stringArg } from 'nexus'
import { inferNewItemFromUrl, NewItem as INewItem } from './parsers'
import { withOwnImage } from './image'

export const Mutation = mutationType({
    definition(t) {
        t.field('createItem', {
            type: 'NewItem',
            args: {
                url: stringArg(),
            },
            async resolve(_, { url }, ctx) {
                const newItem = inferNewItemFromUrl(url).then(
                    (item: INewItem) => {
                        return withOwnImage(item)
                    }
                )
                return newItem
            },
        })
    },
})

export const NewItem = objectType({
    name: 'NewItem',
    definition: t => {
        t.string('title')
        t.string('author')
        t.string('imageUrl')
        t.string('productUrl')
        t.string('type')
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
    members: ['book', 'album', 'movie', 'people', 'video', 'paper', 'podcast'],
})
