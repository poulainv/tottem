import * as React from 'react'
import { useGetItemsQuery } from '../../../generated/types'
import { ItemType, ModificationTrackActions } from '../../common'
import DraggableList from '../components/DraggableList'
import { useItemDragnDrop } from '../components/DraggableList/hooks'
import Skeleton from '../components/DraggableList/Skeleton'

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

    const items = data?.items
        ?.filter(x => !x.isDeleted)
        ?.filter(i => {
            return !filterTypes.length || filterTypes.includes(i.type)
        })
        ?.sort(
            (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
        )
        ?.sort((a, b) => a.position - b.position)

    const { onDragEnd } = useItemDragnDrop({ items, collectionId })

    if (items === undefined || loading) {
        return <Skeleton rowCount={6} />
    }

    return (
        <DraggableList
            items={items}
            className={className}
            onChange={onChange}
            onSaved={onSaved}
            onSaving={onSaving}
            onDragEnd={onDragEnd}
            dndEnabled={!filterTypes.length} // dnd is disabled when filters are selected
        />
    )
}
