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
