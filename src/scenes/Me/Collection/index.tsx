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

<<<<<<< HEAD
export default ({ dispatch, collectionId }: Props) => {
    const isBrowser = typeof window !== 'undefined'
    const [selectedType, setSelectedType] = useState<ItemType | 'All'>('All')
    const { data } = useGetCollectionIdQuery({
=======
export default ({ collectionId }: Props) => {
    const [selectedTypes, setSelectedTypes] = useState<Array<ItemType>>([])
    const authUser = getAuthUser()

    const [message, dispatch] = useStatusMessage()

    if (authUser === undefined) {
        return <LoadingPage />
    }

    const { data, loading } = useGetCollectionIdQuery({
>>>>>>> use reducer hook instead of state to filter collections on multiple types
        variables: { collectionId },
        returnPartialData: isBrowser,
    })
    if (!data || !data.collection) {
        return <LoadingPage />
    }

    const { collection } = data

    const handleFilterChange = (filter: Array<ItemType>) => {
        setSelectedTypes(filter)
    }

    return (
<<<<<<< HEAD
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
=======
        <div className="flex h-screen text-sm ">
            <Sidenav authUserId={authUser.id} />
            <div className="flex flex-1 flex-col">
                <TopBar
                    message={message}
                    avatar={authUser.picture}
                    username={authUser.name}
                />
                <main className="text-sm">
                    <HeaderForm
                        collection={collection}
                        onChange={() => dispatch('CHANGED')}
                        onSaved={() => dispatch('SAVED')}
                        onSaving={() => dispatch('SAVING')}
                    />
                    <p className="mx-1">Vincent</p>
                    <p className="mx-1">|</p>
                    <InlineIcon
                        className="mx-1"
                        height={14}
                        width={14}
                        icon={baselineSettings}
                    />{' '}
                </div>
                <main className="text-sm w-full max-w-4xl mx-auto ">
                    <Status>
                        {(
                            onSavedF: (collectionId: string) => void,
                            onSaving: () => void
                        ) => (
                            <HeaderForm
                                collection={collection}
                                onSaved={onSavedF}
                                onSaving={onSaving}
                            />
                        )}
                    </Status>
<<<<<<< HEAD
=======

                    <FilterBadges
                        onFilterChange={handleFilterChange}
                        items={collection.items}
                    />
                    {collection.items
                        .filter(i => {
                            return (
                                !selectedTypes.length ||
                                selectedTypes.includes(i.type)
                            )
                        })
                        .map(i => {
                            return <div>{i.id}</div>
                        })}
>>>>>>> use reducer hook instead of state to filter collections on multiple types
                </main>
>>>>>>> use reducer hook instead of state to filter collections on multiple types
            </div>
        </Fragment>
    )
}
