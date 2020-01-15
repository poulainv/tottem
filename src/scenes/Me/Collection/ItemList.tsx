import * as React from 'react'
import { useGetItemsQuery } from '../../../generated/types'
import { ItemType, ModificationTrackActions } from '../../common'
import DraggableList from '../components/DraggableList'
import { useItemDragnDrop } from '../components/DraggableList/hooks'
import Skeleton from '../components/DraggableList/Skeleton'
import EmptyBox from '../../../../public/pictograms/empty-box.svg'

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
        return <Skeleton className={className} rowCount={6} />
    }

    if (!items.length) {
        return (
            <div className="w-full mt-48 flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <EmptyBox className="fill-current h-20 w-20 text-gray-400" />
                </div>
            </div>
        )
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
