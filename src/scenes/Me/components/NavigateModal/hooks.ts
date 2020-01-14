import { useRouter } from 'next/router'
import {
    GetSectionsQuery,
    useGetSectionsQuery,
    useGetNavigationStateQuery,
} from '../../../../generated/types'
import { useState, useEffect, useCallback } from 'react'
import { useApolloClient } from '@apollo/react-hooks'

export interface PageType {
    title: string
    id?: string
    type: 'inbox' | 'collection' | 'section'
}

const inboxPage: PageType = {
    type: 'inbox',
    id: 'inbox',
    title: 'Inbox',
}

export const navigateKeyMap = {
    OPEN_NAVIGATE: 'cmd+k',
    CLOSE_NAVIGATE: 'Escape',
}

const getInitialPages = (query?: GetSectionsQuery) => {
    const collections = query?.sections
        ?.flatMap(x => x.collections)
        ?.filter(x => x !== undefined)
        ?.map(x => {
            return {
                id: x.id,
                title: x.title || 'New Collection',
                type: 'collection',
            } as PageType
        })
    const sections = query?.sections
        ?.filter(x => x !== undefined)
        ?.map(x => {
            return {
                id: x.id,
                title: x.title || 'New Space',
                type: 'section',
            } as PageType
        })
    const userPages = sections
        ?.concat(collections || [])
        ?.sort((a, b) => a.title.localeCompare(b.title)) // FIXME here!
    return [inboxPage].concat(userPages || [])
}

export const useNavigationModal = () => {
    const client = useApolloClient()
    const [isOpen, setIsOpen] = useState(false)
    const { data } = useGetNavigationStateQuery()

    useEffect(() => {
        setIsOpen(data?.modal?.isNavigationOpen || false)
    }, [data?.modal?.isNavigationOpen])

    const setNavigationState = (value: boolean) => {
        client.writeData({
            data: {
                modal: {
                    isNavigationOpen: value,
                    __typename: 'Modal',
                },
            },
        })
    }

    const handlers = {
        OPEN_NAVIGATE: () => setNavigationState(true),
        CLOSE_NAVIGATE: () => setNavigationState(false),
    }

    const onRequestClose = useCallback(() => {
        setNavigationState(false)
    }, [])

    const trigger = () => {
        setNavigationState(true)
    }

    return { isOpen, onRequestClose, handlers, trigger }
}

export const usePageNavigation = (authUserId: string) => {
    const router = useRouter()
    const [pages, setPages] = useState<PageType[]>([])
    const { data } = useGetSectionsQuery({
        variables: { authUserId },
    })

    useEffect(() => {
        setPages(getInitialPages(data))
    }, [data?.sections])

    const navigateTo = useCallback(
        (id: string) => {
            const dest = pages.filter(x => x.id === id)[0]
            if (dest.type === 'collection') {
                router.push('/me/c/[collectionId]', `/me/c/${id}`)
            } else if (dest.type === 'section') {
                router.push('/me/s/[sectionId]', `/me/s/${id}`)
            } else if (dest.type === 'inbox') {
                router.push('/me/inbox')
            } else {
                throw new Error(`Type ${dest.type} not implemented`)
            }
        },
        [pages]
    )

    return {
        navigateTo,
        pages,
    }
}
