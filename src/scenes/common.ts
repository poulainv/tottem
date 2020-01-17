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

export interface ModificationTrackActions {
    onChange?: () => void
    onSaved?: () => void
    onSaving?: () => void
}
