import { queryType, mutationType, objectType, enumType } from 'nexus'

export const Query = queryType({
    definition(t) {
        t.crud.user()
    },
})

export const Mutation = mutationType({
    definition(t) {
        t.crud.createOneUser()
        t.crud.deleteOneUser()
    },
})

export const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id()
        t.model.slug()
        t.model.biography()
        t.model.firstname()
        t.model.sections()
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
    },
})
