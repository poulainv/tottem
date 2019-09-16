export interface ICollection {
    name: string
    items: Item[]
}

export interface Item {
    author: string
    imageUrl: string
    title: string
    imageColor?: string
}

export interface Book extends Item {
    imageColor: string
    amazonUrl: string
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
