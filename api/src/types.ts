import { queryType, mutationType, objectType } from 'nexus'

export const Query = queryType({
    definition(t) {
        t.crud.user()
        t.crud.users({ ordering: true })
        t.crud.post()
        t.crud.posts({ filtering: true })
    },
})

export const Mutation = mutationType({
    definition(t) {
        t.crud.createOneUser()
        t.crud.createOnePost()
        t.crud.deleteOneUser()
        t.crud.deleteOnePost()
    },
})

export const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id()
        t.model.email()
        t.model.posts()
    },
})

export const Post = objectType({
    name: 'Post',
    definition(t) {
        t.model.id()
    },
})
