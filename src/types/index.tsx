export type CollectionType = 'books' | 'albums' | 'movies'

export interface ICollection {
    type: CollectionType
    name: string
    items: Item[]
}

export interface Item {
    author: string
    imageUrl: string
    title: string
    size?: 'small' | 'big'
    roundedImg?: boolean
    imageColor?: string
}

export interface Book extends Item {
    amazonUrl: string
}

export interface Album extends Item {
    spotifyUrl?: string
}

export interface Movie extends Item {
    amazonUrl: string
}

export type ItemType = Book | Album | Movie

export interface UserProfile {
    firstname: string
    pictureUrl: string
    biography: string
}
