import * as React from 'react'
import InboxIcon from '../../../../public/pictograms/inbox.svg'
import { useGetInboxQuery } from '../../../generated/types'
import FilterBadges from '../FilterBadges'
import ItemListView from '../ItemListView'
import Skeleton from '../ItemListView/Skeleton'

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
            {data.inbox === undefined ? (
                <Skeleton />
            ) : (
                <ItemListView
                    onDragEnd={() => 1}
                    loading={loading}
                    items={data.inbox}
                    className="mt-8"
                    filterTypes={[]}
                    dndEnabled={false}
                    // onChange={() => dispatch('CHANGED')}
                    // onSaved={() => dispatch('SAVED')}
                    // onSaving={() => dispatch('SAVING')}
                />
            )}
        </div>
    )
}
