export interface ICollection {
    id: string
    slug?: string
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

export interface ISectionIndex {
    id: string
    name: string
    index: number
}

export interface Item {
    collectionId?: string
    author?: string
    imageUrl?: string
    title: string
    productUrl: string
    provider?: string
    type: ItemType
    note?: string
    description?: string
    meta?: { [index: string]: any }
}

export type ItemType =
    | 'book'
    | 'album'
    | 'movie'
    | 'people'
    | 'video'
    | 'article'
    | 'repository'
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
    authUserId?: string
    pictureUrl: string
    biography: string
    social?: ISocial
    label?: string
}

export type ImageShapeType = 'rectangle' | 'square' | 'circle'

export const imageShapes: { [type in ItemType]: ImageShapeType } = {
    album: 'square',
    book: 'rectangle',
    movie: 'rectangle',
    article: 'square',
    people: 'circle',
    repository: 'square',
    podcast: 'square',
    video: 'square',
    website: 'square',
}
