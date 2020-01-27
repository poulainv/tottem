import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    GetItemsDocument,
    GetItemsQuery,
    SearchItem,
    useCreateItemFromSearchMutation,
    useCreateItemFromUrlMutation,
    useSearchItemLazyQuery,
    CollectionWithPreviewFragment,
    CollectionWithPreviewFragmentDoc,
} from '../../../../generated/types'
import { SelectValue } from 'antd/lib/select'

interface ItemsFormData {
    url: string
}

const useItemUrlForm = (
    collectionId: string,
    onStart?: () => void,
    onCompleted?: () => void
) => {
    const { register, handleSubmit, reset, errors } = useForm<ItemsFormData>()

    const [addItem, { loading }] = useCreateItemFromUrlMutation({
        onCompleted: _ => onCompleted?.(),
        update(cache, { data }) {
            if (data === undefined || data === null) {
                throw Error('Can not update cache because no data returned')
            }
            try {
                // Side effect: update section collection preview
                const collection = cache.readFragment<
                    CollectionWithPreviewFragment
                >({
                    fragmentName: 'CollectionWithPreview',
                    id: `Collection:${collectionId}`,
                    fragment: CollectionWithPreviewFragmentDoc,
                })

                cache.writeFragment({
                    id: `Collection:${collectionId}`,
                    fragment: CollectionWithPreviewFragmentDoc,
                    fragmentName: 'CollectionWithPreview',
                    data: {
                        ...collection,
                        items: [data.items].concat(collection?.items || []),
                    },
                })
            } catch {
                // normal if query not available yet
            }

            // Side effect: update current item list
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
        onStart?.()
        addItem({
            variables: {
                url,
                collectionId,
            },
        })
    })

    return { register, onSubmit, loading, errors }
}

const useItemFormSearch = (
    searchItemType: string,
    collectionId: string,
    onStart?: () => void,
    onCompleted?: () => void
) => {
    const [dataSource, setDataSource] = useState<SearchItem[]>()
    const [value, setValue] = useState<string>()

    // onCompleted is called on each rerendered caused by 
    // https://github.com/apollographql/react-apollo/issues/3505
    const [search] = useSearchItemLazyQuery({
        onCompleted: data => {
            if (data?.search !== undefined) {
                setDataSource(data.search)
            }
        },
    })

    const onChange = (q: string) => {
        setValue(q)
        search({ variables: { query: q, kind: searchItemType } })
    }

    const [addItem, { loading }] = useCreateItemFromSearchMutation({
        onCompleted: _ => onCompleted?.(),
        update(cache, { data }) {
            if (data === undefined || data === null) {
                throw Error('Can not update cache because no data returned')
            }

            // Side effect: update section collection preview
            try {
                const collection = cache.readFragment<
                    CollectionWithPreviewFragment
                >({
                    fragmentName: 'CollectionWithPreview',
                    id: `Collection:${collectionId}`,
                    fragment: CollectionWithPreviewFragmentDoc,
                })

                cache.writeFragment({
                    id: `Collection:${collectionId}`,
                    fragment: CollectionWithPreviewFragmentDoc,
                    fragmentName: 'CollectionWithPreview',
                    data: {
                        ...collection,
                        items: [data.items].concat(collection?.items || []),
                    },
                })
            } catch {
                // normal if query not available yet
                // FIXME should be event driven
            }

            // Side effect: update current item list
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
        },
    })

    const onSelect = (valueSelect: SelectValue) => {
        if (dataSource === undefined) {
            throw Error('Datasource undefined')
        }
        onStart?.()

        const found = dataSource.find(x => x.id === valueSelect)
        if (found === undefined) {
            throw Error('Unable to find the value')
        }

        addItem({
            variables: {
                id: found.id,
                kind: searchItemType,
                collectionId,
            },
        })
        setDataSource([])
        setValue('')
    }

    return {
        value,
        loading,
        dataSource,
        onChange,
        onSelect,
    }
}

export { useItemUrlForm, useItemFormSearch }
