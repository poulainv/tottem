export interface ICollection {
    id: string
    name: string
    items: Item[]
    sectionId?: string
    detail?: string
}

export interface ISection {
    id: string
    name: string
    index: number
    collections: ICollection[]
}

export interface Item {
    collectionId: string
    author: string
    imageUrl: string
    title: string
    size?: 'small' | 'big'
    imageColor?: string
    productUrl: string
    note?: string
    type: ItemType
    detail?: string
}

export type ItemType =
    | 'book'
    | 'album'
    | 'movie'
    | 'people'
    | 'video'
    | 'paper'
    | 'podcast'

export interface UserProfile {
    firstname: string
    pictureUrl: string
    biography: string
    website?: string
}
