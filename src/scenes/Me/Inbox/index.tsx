import * as React from 'react'
import InboxIcon from '../../../../public/pictograms/inbox.svg'
import { useGetInboxQuery } from '../../../generated/types'
import ItemList from './ItemList'
import Skeleton from '../DraggableList/Skeleton'
import FilterBadgesView from '../FilterBadgesView'
import { ItemType } from '../../common'
import ItemForm from './ItemForm'

interface InboxProps {
    dispatch: (action: 'SAVED' | 'SAVING' | 'CHANGED') => void
}

export default ({ dispatch }: InboxProps) => {
    const [selectedTypes, setSelectedTypes] = React.useState<ItemType[]>([])
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
            <FilterBadgesView
                listId={'inbox'}
                items={data?.inbox}
                onFilterChange={setSelectedTypes}
                className="mt-8"
            />
            <ItemForm className="mt-8" />
            {data.inbox === undefined ? (
                <Skeleton />
            ) : (
                <ItemList
                    loading={loading}
                    items={data.inbox}
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
