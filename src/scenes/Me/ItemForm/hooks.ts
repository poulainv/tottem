import useForm from 'react-hook-form'
import {
    GetItemsDocument,
    GetItemsQuery,
    useCreateItemMutation,
} from '../../../generated/types'

interface ItemsFormData {
    url: string
}

const useItemForm = (collectionId?: string) => {
    const { register, handleSubmit, reset, errors } = useForm<ItemsFormData>()

    const [addItem, { loading }] = useCreateItemMutation({
        update(cache, { data }) {
            if (data === undefined || data === null) {
                throw Error('Can not update cache because no data returned')
            }
            const cachedData = cache.readQuery<GetItemsQuery>({
                query: GetItemsDocument,
                variables: {
                    collectionId,
                },
            })

            if (cachedData !== null && cachedData.items) {
                cache.writeQuery({
                    query: GetItemsDocument,
                    variables: {
                        collectionId,
                    },
                    data: {
                        items: cachedData.items.concat(data.items),
                    },
                })
            }
            reset()
        },
    })

    const onSubmit = handleSubmit(({ url }) => {
        // Could happen because page is shared with new (non existing) collection
        // But should not occured because input is disabled when collection still not created
        if (collectionId === undefined) {
            throw Error(
                'Item try to be saved but collectionId is undefined. Is collection saved?'
            )
        }
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
