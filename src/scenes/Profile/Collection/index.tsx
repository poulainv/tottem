import * as React from 'react'
import { useGetCollectionProfileQuery } from '../../../generated/types'
import Loading from '../../UtilsPage/Loading'
import DividerIcon from '../../../../public/pictograms/divider.svg'
import FilterBadgesView from '../../Me/components/FilterBadgesView'
import ItemCard from './components/ItemCard'
import { ItemType } from '../../common'

export interface ICollectionProps {
    authUserId?: string
    collectionId: string
    profileSlug: string
}

export default function Collection({
    authUserId,
    collectionId,
    profileSlug,
}: ICollectionProps) {
    const [selectedTypes, setSelectedTypes] = React.useState<ItemType[]>([])
    const { data, loading } = useGetCollectionProfileQuery({
        variables: {
            collectionId,
        },
    })

    if (loading || !data?.collection) {
        return <Loading />
    }

    const { collection } = data

    const updatedAt = new Date(collection.updatedAt).toLocaleDateString(
        'fr-FR',
        {
            year: 'numeric',
            day: 'numeric',
            month: 'short',
        }
    )

    const filteredItems = collection.items
        ?.filter(x => !x.isDeleted)
        ?.filter(i => {
            return !selectedTypes.length || selectedTypes.includes(i.type)
        })
        ?.sort(
            (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
        )
        ?.sort((a, b) => a.position - b.position)

    return (
        <div className="flex flex-col max-w-3xl mx-auto">
            <div className="text-2xl text-gray-900"> {collection.title} </div>
            {collection.detail && (
                <div className="mt-8 text-gray-700 leading-relaxed text-base font-light">
                    {collection.detail}
                </div>
            )}
            <div className="flex mt-8 items-center">
                <img
                    className="h-12 w-12 rounded-full"
                    src={collection.owner.pictureUrl}
                    alt="Author avatar"
                />
                <div className="ml-4 leading-none">
                    <div className="text-gray-900 py-1">
                        {collection.owner.firstname}
                    </div>
                    <div className="text-gray-500 text-sm tracking-tight py-1">
                        {updatedAt}
                    </div>
                </div>
                <DividerIcon className="fill-current text-gray-400 h-8 ml-6" />
                <FilterBadgesView
                    className="ml-6"
                    listId={collection.id}
                    onFilterChange={setSelectedTypes}
                    items={collection.items}
                />
            </div>
            <div className="mt-8">
                {filteredItems.map(item => {
                    return (
                        <ItemCard
                            className="mt-6 first:mt-0"
                            item={item}
                            key={item.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}
