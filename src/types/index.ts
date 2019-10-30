export interface ICollection {
    id: string
    name: string
    date: Date | string
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
    collectionId?: string
    author?: string
    imageUrl?: string
    title: string
    size?: 'small' | 'big'
    imageColor?: string
    productUrl: string
    type: ItemType | string
    note?: string
    meta?: { [index: string]: any }
}

export type ItemType =
    | 'book'
    | 'album'
    | 'movie'
    | 'people'
    | 'video'
    | 'paper'
    | 'website'
    | 'podcast'

export interface ISocial {
    linkedin?: string
    github?: string
    mail?: string
    youtube?: string
    website?: string
}

export interface UserProfile {
    slug: string
    firstname: string
    pictureUrl: string
    biography: string
    social?: ISocial
    label?: string
    sections: ISection[]
}

export type ImageShapeType = 'rectangle' | 'square' | 'circle'

export const imageShapes: { [type in ItemType]: ImageShapeType } = {
    album: 'square',
    book: 'rectangle',
    movie: 'rectangle',
    paper: 'square',
    people: 'circle',
    podcast: 'square',
    video: 'square',
    website: 'square',
}
