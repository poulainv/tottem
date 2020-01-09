import * as React from 'react'
import { Item } from '../../../generated/types'
import { ItemType, ModificationTrackActions } from '../../common'
import DraggableList from '../components/DraggableList'
import Skeleton from '../components/DraggableList/Skeleton'
import EmptyBox from '../../../../public/pictograms/empty-box.svg'

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
            | 'isDeleted'
            | 'position'
            | 'createdAt'
        >
    >
    className?: string
} & ModificationTrackActions) => {
    const filteredItems = items
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

    if (filteredItems === undefined || loading) {
        return <Skeleton className={className} rowCount={6} />
    } else if (filteredItems.length === 0) {
        return (
            <div className="w-full mt-48 flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <EmptyBox className="fill-current h-20 w-20 text-gray-400" />
                    <span className="text-gray-600 mt-2">Empty inbox!</span>
                </div>
            </div>
        )
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
