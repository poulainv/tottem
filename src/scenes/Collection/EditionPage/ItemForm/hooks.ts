import { useMutation } from '@apollo/react-hooks'
import useForm from 'react-hook-form'
import { addItemByUrlQuery, QueryData, QueryVars } from './query'
import { itemsQuery } from '../ItemList/query'
import { Item } from '../../types'

interface Query {
    collection: { items: Item[] }
}

interface ItemsFormData {
    url: string
}

const useItemForm = (collectionId?: string) => {
    const { register, handleSubmit, reset, errors } = useForm<ItemsFormData>()
    const [addItem, { loading }] = useMutation<QueryData, QueryVars>(
        addItemByUrlQuery,
        {
            update(cache, { data }) {
                if (data === undefined || data === null) {
                    throw Error(
                        'Can not updated cache because no data returned'
                    )
                }
                const cachedData = cache.readQuery<Query>({
                    query: itemsQuery,
                    variables: {
                        collectionId,
                    },
                })

                if (cachedData && cachedData.collection.items) {
                    cache.writeQuery({
                        query: itemsQuery,
                        variables: {
                            collectionId,
                        },
                        data: {
                            collection: {
                                ...cachedData.collection,
                                items: cachedData.collection.items.concat(
                                    data.items
                                ),
                            },
                        },
                    })
                }
                reset()
            },
        }
    )

    // Could happen because page is shared with new (non existing) collection
    // But should not occured because input is disabled when collection still not created
    if (collectionId === undefined) {
        throw Error(
            'Item try to be saved but collectionId is undefined. Is collection saved?'
        )
    }

    const onSubmit = handleSubmit(({ url }) => {
        addItem({
            variables: {
                url,
                collectionId,
            },
        })
    })

    return { register, onSubmit, loading, errors }
}

export { useItemForm }
