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
    roundedImg?: boolean
    imageColor?: string
    productUrl: string
    note?: string
    type: 'book' | 'album' | 'movie' | 'people' | 'video'
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

export type ItemType = Book | Album | Movie

export interface UserProfile {
    firstname: string
    pictureUrl: string
    biography: string
}
