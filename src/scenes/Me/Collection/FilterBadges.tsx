import * as React from 'react'
import { useGetItemsQuery } from '../../../generated/types'
import { ItemType } from '../../common'
import FilterBadgesView from '../components/FilterBadgesView'

interface FilterBadgesProps {
    collectionId: string
    onFilterChange: (filter: ItemType[]) => void
    className: string
}

export default ({
    onFilterChange,
    collectionId,
    className,
}: FilterBadgesProps) => {
    const { data } = useGetItemsQuery({
        variables: {
            collectionId,
        },
    })
    return (
        <FilterBadgesView
            listId={collectionId}
            items={data?.items}
            onFilterChange={onFilterChange}
            className={className}
        />
    )
}
