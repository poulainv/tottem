import * as React from 'react'
import ItemList from '../ItemListView'
import { ItemType, ModificationTrackActions } from '../../common'
import { useGetItemsQuery } from '../../../generated/types'
import { useItemDragnDrop } from '../ItemListView/hooks'

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
    const { onDragEnd } = useItemDragnDrop({ items: data?.items, collectionId })
    return (
        <ItemList
            items={data?.items}
            loading={loading}
            filterTypes={filterTypes}
            className={className}
            onChange={onChange}
            onSaved={onSaved}
            onSaving={onSaving}
            onDragEnd={onDragEnd}
        />
    )
}
