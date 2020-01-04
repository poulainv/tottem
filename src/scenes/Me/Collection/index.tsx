import { Fragment, useState } from 'react'
import { useGetCollectionIdQuery } from '../../../generated/types'
import { ItemType } from '../../common'
import LoadingPage from '../../LoadingPage'
import FilterBadges from '../FilterBadges'
import ItemForm from '../ItemForm'
import ItemList from './ItemList'
import HeaderForm from './HeaderForm'
import Skeleton from '../ItemListView/Skeleton'

interface Props {
    collectionId: string
    dispatch: (action: 'SAVED' | 'SAVING' | 'CHANGED') => void
}

export default ({ dispatch, collectionId }: Props) => {
    const isBrowser = typeof window !== 'undefined'

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
                <ItemList
                    collectionId={collection.id}
                    className="mt-8"
                    filterTypes={selectedTypes}
                    onChange={() => dispatch('CHANGED')}
                    onSaved={() => dispatch('SAVED')}
                    onSaving={() => dispatch('SAVING')}
                />
            )}
        </Fragment>
    )
}
