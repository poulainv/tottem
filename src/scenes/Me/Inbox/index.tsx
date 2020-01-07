import * as React from 'react'
import InboxIcon from '../../../../public/pictograms/inbox.svg'
import { useGetInboxQuery } from '../../../generated/types'
import { ItemType } from '../../common'
import { ItemActionsContext } from '../components/DraggableList/EditableItem/hooks'
import Skeleton from '../components/DraggableList/Skeleton'
import FilterBadgesView from '../components/FilterBadgesView'
import ItemForm from './ItemForm'
import ItemList from './ItemList'
import { InboxItemActions } from './hooks'

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
                items={data?.inbox?.items}
                onFilterChange={setSelectedTypes}
                className="mt-8"
            />
            <ItemForm className="mt-8" />
            {data.inbox === undefined ? (
                <Skeleton />
            ) : (
                <ItemActionsContext.Provider value={InboxItemActions}>
                    <ItemList
                        loading={loading}
                        items={data.inbox.items}
                        className="mt-8"
                        filterTypes={selectedTypes}
                        onChange={() => dispatch('CHANGED')}
                        onSaved={() => dispatch('SAVED')}
                        onSaving={() => dispatch('SAVING')}
                    />
                </ItemActionsContext.Provider>
            )}
        </div>
    )
}
