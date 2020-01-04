import { useGetItemsQuery, Item } from '../../../generated/types'
import { ItemType, ModificationTrackActions } from '../../common'
import DraggableList from './DraggableList'
import Skeleton from './Skeleton'

export default ({
    items,
    loading,
    className,
    filterTypes,
    onChange,
    onSaved,
    onSaving,
    onDragEnd,
    dndEnabled = true,
}: {
    items?: Array<
        Pick<
            Item,
            | 'title'
            | 'id'
            | 'imageUrl'
            | 'author'
            | 'type'
            | 'isArchived'
            | 'position'
            | 'createdAt'
        >
    >
    onDragEnd: (res: any) => void
    loading: boolean
    className?: string
    filterTypes: ItemType[]
    dndEnabled?: boolean
} & ModificationTrackActions) => {
    if (items === undefined || loading) {
        return <Skeleton rowCount={6} />
    } else {
        const filteredItems = items
            .filter(x => !x.isArchived)
            .filter(i => {
                return !filterTypes.length || filterTypes.includes(i.type)
            })
            .sort(
                (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
            )
            .sort((a, b) => a.position - b.position)
        return (
            <DraggableList
                items={filteredItems}
                collectionId={'collectionId'}
                className={className}
                onChange={onChange}
                onSaved={onSaved}
                onSaving={onSaving}
                onDragEnd={onDragEnd}
                dndEnabled={dndEnabled}
            />
        )
    }
}
