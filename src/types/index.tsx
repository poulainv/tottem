export interface ICollection {
    name: string
    items: Item[]
}

export interface Item {
    author: string
    imageUrl: string
    title: string
    productUrl: string
    imageColor?: string
}

export interface Book extends Item {
    imageColor: string
}
