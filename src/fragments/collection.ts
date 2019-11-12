import gql from 'graphql-tag'
import { ItemType } from './common'

export const CollectionPageFragment = {
    collection: gql`
        fragment CollectionCollectionPage on Collection {
            id
            slug
            name
            date
            detail
            section {
                slug
            }
            items {
                id
                imageUrl
                comment
                productUrl
                title
                author
                type
                meta
            }
        }
    `,
    user: gql`
        fragment UserCollectionPage on User {
            id
            slug
            firstname
            pictureUrl
        }
    `,
}

export interface User {
    id: string
    slug: string
    firstname: string
    pictureUrl: string
}

export interface ICollection {
    id: string
    slug: string
    name: string
    date: Date | string
    items: Item[]
    detail?: string
    section: { slug: string }
}

export interface Item {
    id: string
    title: string
    author?: string
    comment?: string
    imageUrl?: string
    productUrl: string
    type: ItemType
    provider?: string
    meta?: object
}
