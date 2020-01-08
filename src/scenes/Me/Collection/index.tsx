import { Fragment, useState } from 'react'
import { useGetCollectionIdQuery } from '../../../generated/types'
import { ItemType } from '../../common'
import LoadingPage from '../../UtilsPage/Loading'
import {
    defaultItemActions,
    ItemActions,
    ItemActionsContext,
} from '../components/DraggableList/EditableItem/hooks'
import Skeleton from '../components/DraggableList/Skeleton'
import MoveModal from '../components/MoveModal'
import FilterBadges from './FilterBadges'
import HeaderForm from './HeaderForm'
import { useMoveItemFromCollection } from './hooks'
import ItemForm from './ItemForm'
import ItemList from './ItemList'

interface Props {
    collectionId: string
    authUserId: string
    dispatch: (action: 'SAVED' | 'SAVING' | 'CHANGED') => void
}

export default ({ dispatch, collectionId, authUserId }: Props) => {
    const isBrowser = typeof window !== 'undefined'

    const [state, moveDispatch] = useMoveItemFromCollection(
        collectionId,
        authUserId
    )
    const itemsActions: ItemActions = Object.assign(defaultItemActions, {
        triggerMoveItem: (itemId: string) =>
            moveDispatch({ type: 'TRIGGER_ITEM_MOVE', itemId }),
    })

    const [selectedTypes, setSelectedTypes] = useState<ItemType[]>([])
    const { data } = useGetCollectionIdQuery({
        variables: { collectionId },
        returnPartialData: isBrowser,
    })
    if (!data || !data.collection) {
        return <LoadingPage />
    }

    const { collection } = data

    return (
        <Fragment>
            <MoveModal
                depart={state.depart}
                onCancel={() => moveDispatch({ type: 'CANCEL' })}
                onDone={() => moveDispatch({ type: 'ITEM_MOVED' })}
                isOpen={state.isOpen}
                authUserId={authUserId}
                onMoveItem={state.onMoveItem}
                itemId={state.itemId}
            />
            <HeaderForm
                collection={collection}
                onChange={() => dispatch('CHANGED')}
                onSaved={() => dispatch('SAVED')}
                onSaving={() => dispatch('SAVING')}
            />
            <FilterBadges
                className="mt-8"
                collectionId={collectionId}
                onFilterChange={setSelectedTypes}
            />
            <ItemForm collectionId={collection.id} className="mt-8" />
            {collection.id === undefined ? (
                <Skeleton />
            ) : (
                <ItemActionsContext.Provider value={itemsActions}>
                    <ItemList
                        collectionId={collection.id}
                        className="mt-8"
                        filterTypes={selectedTypes}
                        onChange={() => dispatch('CHANGED')}
                        onSaved={() => dispatch('SAVED')}
                        onSaving={() => dispatch('SAVING')}
                    />
                </ItemActionsContext.Provider>
            )}
        </Fragment>
    )
}
