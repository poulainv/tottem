import { Fragment, useState } from 'react'
import { useGetCollectionIdQuery } from '../../../generated/types'
import { ItemType } from '../../common'
import LoadingPage from '../../UtilsPage/Loading'
import {
    defaultActions,
    ItemActions,
    ItemActionsContext,
} from '../components/DraggableList/EditableItem/hooks'
import Skeleton from '../components/DraggableList/Skeleton'
import FilterBadges from './FilterBadges'
import HeaderForm from './HeaderForm'
import ItemForm from './ItemForm'
import ItemList from './ItemList'
import { useMoveItemToCollection } from './hooks'

interface Props {
    collectionId: string
    dispatch: (action: 'SAVED' | 'SAVING' | 'CHANGED') => void
}

export default ({ dispatch, collectionId }: Props) => {
    const isBrowser = typeof window !== 'undefined'

    const itemsActions: ItemActions = Object.assign(defaultActions, {
        useMoveItem: useMoveItemToCollection(collectionId),
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
