import range from 'lodash.range'
import { Fragment, useState } from 'react'
import { Facebook } from 'react-content-loader'
import { useGetCollectionIdQuery } from '../../../generated/types'
import LoadingPage from '../../LoadingPage'
import ItemCard from '../ItemCard'
import ItemForm from '../ItemForm'
import HeaderForm from './HeaderForm'
import { ItemType } from '../../common'
import FilterBadges from './FilterBadges'

interface Props {
    collectionId: string
    dispatch: (action: 'SAVED' | 'SAVING' | 'CHANGED') => void
}

export default ({ dispatch, collectionId }: Props) => {
    const isBrowser = typeof window !== 'undefined'

    const [selectedTypes, setSelectedTypes] = useState<Array<ItemType>>([])
    const { data } = useGetCollectionIdQuery({
        variables: { collectionId },
        returnPartialData: isBrowser,
    })
    if (!data || !data.collection) {
        return <LoadingPage />
    }

    const handleFilterChange = (filter: Array<ItemType>) => {
        setSelectedTypes(filter)
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
            <div>
                <FilterBadges
                    onFilterChange={handleFilterChange}
                    items={collection.items}
                />
            </div>
            <div className="mt-8">
                <ItemForm collectionId={collection.id} />
            </div>
            <div className="mt-5">
                {collection.items
                    ? collection.items.map(item => {
                          return (
                              <div key={item.id} className="mt-4 first::mt-2">
                                  <ItemCard item={item} />
                              </div>
                          )
                      })
                    : range(4).map((i: number) => {
                          return <Facebook key={i} width={600} height={140} />
                      })}
            </div>
        </Fragment>
    )
}
