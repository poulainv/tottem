import * as React from 'react'
import InboxIcon from '../../../../public/pictograms/inbox.svg'
import { useGetInboxQuery } from '../../../generated/types'
import FilterBadges from '../FilterBadges'
import ItemList from '../ItemList'

export default ({}) => {
    const { data, loading } = useGetInboxQuery()
    if (data === undefined || loading) {
        return <div>Coucou</div>
    }
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center">
                <InboxIcon height={24} width={24} />
                <h1 className="text-2xl ml-2 text-gray-900 leading-none">
                    Inbox
                </h1>
            </div>
            {/* <FilterBadges
                className="mt-8"
                collectionId={collectionId}
                onFilterChange={setSelectedTypes}
            />
            <ItemForm collectionId={collection.id} className="mt-8" /> */}
            {collection.id === undefined ? (
                <Skeleton />
            ) : (
                <ItemList
                    collectionId={collection.id}
                    className="mt-8"
                    filterTypes={selectedTypes}
                    onChange={() => dispatch('CHANGED')}
                    onSaved={() => dispatch('SAVED')}
                    onSaving={() => dispatch('SAVING')}
                />
            )}
        </div>
    )
}
