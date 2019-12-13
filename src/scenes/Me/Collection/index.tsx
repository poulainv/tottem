import range from 'lodash.range'
import { Fragment } from 'react'
import { Facebook } from 'react-content-loader'
import { useGetCollectionIdQuery } from '../../../generated/types'
import LoadingPage from '../../LoadingPage'
import ItemCard from '../ItemCard'
import ItemForm from '../ItemForm'
import HeaderForm from './HeaderForm'

interface Props {
    collectionId: string
    dispatch: (action: 'SAVED' | 'SAVING' | 'CHANGED') => void
}

export default ({ dispatch, collectionId }: Props) => {
    const isBrowser = typeof window !== 'undefined'
    const [selectedType, setSelectedType] = useState<ItemType | 'All'>('All')
    const { data } = useGetCollectionIdQuery({
        variables: { collectionId },
        returnPartialData: isBrowser,
    })
    if (!data || !data.collection) {
        return <LoadingPage />
    }

    const { collection } = data

    const handleFilterChange = (filter: ItemType | 'All') => {
        setSelectedType(filter)
    }

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
