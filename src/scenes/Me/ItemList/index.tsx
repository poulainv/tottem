import { useGetItemsQuery } from '../../../generated/types'
import { ItemType, ModificationTrackActions } from '../../common'
import DraggableList from './DraggableList'
import Skeleton from './Skeleton'

export default ({
    collectionId,
    className,
    filterTypes,
    onChange,
    onSaved,
    onSaving,
}: {
    collectionId: string
    className?: string
    filterTypes: ItemType[]
} & ModificationTrackActions) => {
    const { data, loading } = useGetItemsQuery({
        variables: {
            collectionId,
        },
    })
    if (data === undefined || data.items === null || loading) {
        return <Skeleton rowCount={6} />
    } else {
        const items = data.items
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
                items={items}
                collectionId={collectionId}
                className={className}
                onChange={onChange}
                onSaved={onSaved}
                onSaving={onSaving}
            />
        )
    }
}
