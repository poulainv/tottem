import * as React from 'react'
import InboxIcon from '../../../../public/pictograms/inbox.svg'
import { useGetInboxQuery } from '../../../generated/types'
import { ItemType } from '../../common'
import {
    defaultItemActions,
    ItemActionsContext,
} from '../components/DraggableList/EditableItem/hooks'
import FilterBadgesView from '../components/FilterBadgesView'
// import { InboxItemActions } from './hooks'
import MoveModal from '../components/MoveModal'
import { useMoveItemFromInbox } from './hooks'
import ItemForm from './ItemForm'
import ItemList from './ItemList'
import { Button, StyledButton } from '../../../components/Button'

interface InboxProps {
    authUserId: string
    messageDispatch: (action: 'SAVED' | 'SAVING' | 'CHANGED') => void
}

export default ({ messageDispatch: dispatch, authUserId }: InboxProps) => {
    const [state, moveDispatch] = useMoveItemFromInbox()
    const InboxItemActions = Object.assign(defaultItemActions, {
        triggerMoveItem: (itemId: string) =>
            moveDispatch({ type: 'TRIGGER_ITEM_MOVE', itemId }),
    })

    const [selectedTypes, setSelectedTypes] = React.useState<ItemType[]>([])
    const { data, loading } = useGetInboxQuery()

    return (
        <div className="flex flex-col">
            <MoveModal
                depart={state.depart}
                onCancel={() => moveDispatch({ type: 'CANCEL' })}
                onDone={() => moveDispatch({ type: 'ITEM_MOVED' })}
                isOpen={state.isOpen}
                authUserId={authUserId}
                onMoveItem={state.onMoveItem}
                itemId={state.itemId}
            />
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
            <ItemActionsContext.Provider value={InboxItemActions}>
                <ItemList
                    loading={loading}
                    items={data?.inbox?.items}
                    className="mt-8"
                    filterTypes={selectedTypes}
                    onChange={() => dispatch('CHANGED')}
                    onSaved={() => dispatch('SAVED')}
                    onSaving={() => dispatch('SAVING')}
                />
            </ItemActionsContext.Provider>
        </div>
    )
}
