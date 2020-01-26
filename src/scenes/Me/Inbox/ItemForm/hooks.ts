import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    GetInboxDocument,
    GetInboxQuery,
    SearchItem,
    useCreateItemFromSearchMutation,
    useCreateItemFromUrlMutation,
    useSearchItemLazyQuery,
} from '../../../../generated/types'
import { useInboxCount } from '../../components/Sidenav/hooks'
import { SelectValue } from 'antd/lib/select'

interface ItemsFormData {
    url: string
}

const useItemUrlForm = (onStart?: () => void, onCompleted?: () => void) => {
    const { register, handleSubmit, reset, errors } = useForm<ItemsFormData>()
    const { setInboxCount } = useInboxCount()

    const [addItem, { loading }] = useCreateItemFromUrlMutation({
        onCompleted: _ => onCompleted?.(),
        update(cache, { data }) {
            if (data === undefined || data === null) {
                throw Error('Can not update cache because no data returned')
            }
            const inboxCachedData = cache.readQuery<GetInboxQuery>({
                query: GetInboxDocument,
            })

            if (inboxCachedData !== null && inboxCachedData.inbox) {
                const newItems = inboxCachedData.inbox.items.concat([
                    data.items,
                ])
                cache.writeQuery({
                    query: GetInboxDocument,
                    data: {
                        inbox: {
                            id: 'me',
                            __typename: 'Inbox',
                            items: newItems,
                        },
                    },
                })
                setInboxCount(cache, newItems.length)
            }
            reset()
        },
    })

    const onSubmit = handleSubmit(({ url }) => {
        onStart?.()
        addItem({
            variables: {
                url,
                inbox: true,
            },
        })
    })

    return { register, onSubmit, loading, errors }
}

const useItemFormSearch = (
    searchItemType: string,
    onStart?: () => void,
    onCompleted?: () => void
) => {
    const [value, setValue] = useState<string>()
    const { setInboxCount } = useInboxCount()

    // onCompleted is called on each rerendered caused by
    // https://github.com/apollographql/react-apollo/issues/3505
    const [dataSource, setDataSource] = useState<SearchItem[]>()
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
        onCompleted: _ => {
            onCompleted?.()
        },
        update(cache, { data }) {
            if (data === undefined || data === null) {
                throw Error('Can not update cache because no data returned')
            }
            const cachedData = cache.readQuery<GetInboxQuery>({
                query: GetInboxDocument,
            })

            if (cachedData !== null && cachedData.inbox) {
                const newItems = cachedData.inbox.items.concat(data.items)
                cache.writeQuery({
                    query: GetInboxDocument,
                    data: {
                        inbox: {
                            id: 'me',
                            __typename: 'Inbox',
                            items: newItems,
                        },
                    },
                })
                setInboxCount(cache, newItems.length)
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
                inbox: true,
            },
        })
        setDataSource([])
        setValue('')
    }

    return { value, onSelect, loading, dataSource, onChange }
}

export { useItemUrlForm, useItemFormSearch }
