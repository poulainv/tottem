export interface ICollection {
    id: string
    name: string
    items: Item[]
    sectionId?: string
}

export interface Section {
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

export interface Book extends Item {
    imageColor?: string
}

export interface Album extends Item {
    spotifyUrl?: string
}

export interface Movie extends Item {
    imageColor?: string
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
}
