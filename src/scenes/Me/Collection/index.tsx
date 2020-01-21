import { Fragment, useState } from 'react'
import { useGetCollectionIdQuery } from '../../../generated/types'
import { ItemType } from '../../common'
import LoadingPage from '../../UtilsPage/Loading'
import { ItemActionsContext } from '../components/DraggableList/EditableItem/hooks'
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
}

export default ({ collectionId, authUserId }: Props) => {
    const {
        state,
        dispatch: moveDispatch,
        actions,
    } = useMoveItemFromCollection(collectionId, authUserId)

    const [selectedTypes, setSelectedTypes] = useState<ItemType[]>([])
    const { data } = useGetCollectionIdQuery({
        variables: { collectionId },
        returnPartialData: typeof window !== 'undefined', // return partial data only client side
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
            <HeaderForm collection={collection} />
            <FilterBadges
                className="mt-8"
                collectionId={collectionId}
                onFilterChange={setSelectedTypes}
            />
            <ItemForm collectionId={collection.id} className="mt-8" />
            {collection.id === undefined ? (
                <Skeleton />
            ) : (
                <ItemActionsContext.Provider value={actions}>
                    <ItemList
                        collectionId={collection.id}
                        className="mt-8"
                        filterTypes={selectedTypes}
                    />
                </ItemActionsContext.Provider>
            )}
        </Fragment>
    )
}
