import gql from 'graphql-tag'
import { ItemType } from './common'

export const CollectionPageFragment = {
    collection: gql`
        fragment CollectionCollectionPage on Collection {
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
            }
        }
    `,
    user: gql`
        fragment UserCollectionPage on User {
            slug
            firstname
            pictureUrl
        }
    `,
    section: gql`
        fragment SectionCollectionPage on Section {
            slug
        }
    `,
}

export interface User {
    slug: string
    firstname: string
    pictureUrl: string
}

export interface ICollection {
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
