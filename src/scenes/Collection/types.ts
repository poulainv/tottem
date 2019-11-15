import { ItemType } from '../common'

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
    createdAt: Date
    items: Item[]
    detail?: string
    section: { slug: string }
}

export interface Item {
    id: string
    title: string
    createdAt: string
    author?: string
    comment?: string
    imageUrl?: string
    productUrl: string
    type: ItemType
    provider?: string
    meta?: object
}
