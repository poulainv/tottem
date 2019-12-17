import { Fragment, useState } from 'react'
import { useGetCollectionIdQuery } from '../../../generated/types'
import { ItemType } from '../../common'
import LoadingPage from '../../LoadingPage'
import FilterBadges from '../FilterBadges'
import ItemForm from '../ItemForm'
import ItemList from '../ItemList'
import HeaderForm from './HeaderForm'

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
                // tslint:disable-next-line: jsx-no-lambda
                onChange={() => dispatch('CHANGED')}
                // tslint:disable-next-line: jsx-no-lambda
                onSaved={() => dispatch('SAVED')}
                // tslint:disable-next-line: jsx-no-lambda
                onSaving={() => dispatch('SAVING')}
            />
            <FilterBadges
                className="mt-4"
                collectionId={collectionId}
                onFilterChange={setSelectedTypes}
                items={collection.items}
            />
            <ItemForm collectionId={collection.id} className="mt-8" />
            <ItemList
                collectionId={collection.id}
                className="mt-5"
                filterTypes={selectedTypes}
            />
        </Fragment>
    )
}
