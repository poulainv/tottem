export interface ICollection {
    id: string
    name: string
    items: Item[]
}

export interface Section {
    id: string
    name: string
    index: number
}

export interface Item {
    collectionId: string
    author: string
    imageUrl: string
    title: string
    imageColor?: string
    productUrl: string
    note?: string
    type: string
    detail?: string
}

export interface Book extends Item {
    imageColor?: string
}

export interface Album extends Item {
    imageColor: string
    spotifyUrl?: string
}

export interface UserProfile {
    firstname: string
    pictureUrl: string
    biography: string
}
