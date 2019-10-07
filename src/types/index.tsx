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
}

export type ItemType =
    | 'book'
    | 'album'
    | 'movie'
    | 'people'
    | 'video'
    | 'paper'
    | 'podcast'

export interface ISocial {
    linkedin?: string
    github?: string
    mail?: string
    youtube?: string
    website?: string
}

export interface UserProfile {
    firstname: string
    pictureUrl: string
    biography: string
    social?: ISocial
}

// Interface representing the params passed in the URL
export interface RoutingMatchParams {
    profileId: string
}
