import { ItemType } from '@prisma/photon'

export interface IItem {
    title: string
    productUrl: string
    imageUrl?: string
    author: string
    type: ItemType
    provider?: string
    description?: string
    meta?: object
}

export interface ICollection {
    id: string
    name: string
    date: string | Date
    items: IItem[]
}

export interface ISection {
    name: string
    index: number
    collections: ICollection[]
}
