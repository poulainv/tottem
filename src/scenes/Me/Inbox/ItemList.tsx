import * as React from 'react'
import { Item } from '../../../generated/types'
import { ItemType, ModificationTrackActions } from '../../common'
import DraggableList from '../components/DraggableList'
import Skeleton from '../components/DraggableList/Skeleton'

export default ({
    items,
    loading,
    className,
    filterTypes,
    onChange,
    onSaved,
    onSaving,
}: {
    loading: boolean
    filterTypes: ItemType[]
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
    className?: string
} & ModificationTrackActions) => {
    const filteredItems = items
        ?.filter(x => !x.isArchived)
        ?.filter(i => {
            return !filterTypes.length || filterTypes.includes(i.type)
        })
        ?.sort(
            (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
        )
        ?.sort((a, b) => a.position - b.position)

    if (filteredItems === undefined || loading) {
        return <Skeleton rowCount={6} />
    }

    return (
        <DraggableList
            items={filteredItems}
            className={className}
            onChange={onChange}
            onSaved={onSaved}
            onSaving={onSaving}
            dndEnabled={false}
        />
    )
}
