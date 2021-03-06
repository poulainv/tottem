import * as React from 'react'
import EmptyBox from '../../../../public/pictograms/empty-box.svg'
import { Item } from '../../../generated/types'
import { ItemType } from '../../common'
import DraggableList from '../components/DraggableList'
import Skeleton from '../components/DraggableList/Skeleton'

export default ({
    items,
    loading,
    className,
    filterTypes,
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
}) => {
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
                </div>
            </div>
        )
    }

    return (
        <DraggableList
            items={filteredItems}
            className={className}
            dndEnabled={false}
        />
    )
}
