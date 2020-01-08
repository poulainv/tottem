import { MutationUpdaterFn } from 'apollo-client'
import gql from 'graphql-tag'
import {
    CreateSectionMutation,
    GetSectionsDocument,
    GetSectionsQuery,
    InboxCountItemFragment,
    InboxCountItemFragmentDoc,
} from '../../../../generated/types'

export const useInboxCount = () => {
    const getInboxCount = (
        proxy: Parameters<MutationUpdaterFn<CreateSectionMutation>>[0]
    ) => {
        const inbox = proxy.readFragment<InboxCountItemFragment>({
            id: 'Inbox:me',
            fragment: InboxCountItemFragmentDoc,
        })
        return inbox?.count
    }

    const setInboxCount = (
        proxy: Parameters<MutationUpdaterFn<CreateSectionMutation>>[0],
        count: number
    ) => {
        proxy.writeFragment({
            id: 'Inbox:me',
            fragment: gql`
                fragment NewInbox on Inbox {
                    count
                }
            `,
            data: {
                id: 'Inbox:me',
                count,
                __typename: 'Inbox',
            },
        })
    }
    const decrementInboxCount = (
        proxy: Parameters<MutationUpdaterFn<CreateSectionMutation>>[0]
    ) => {
        const count = getInboxCount(proxy)
        if (count !== undefined && count >= 1) {
            setInboxCount(proxy, count - 1)
        } else {
            throw new Error(`Count ${count} is not defined or = <1`)
        }
    }

    const incrementInboxCount = (
        proxy: Parameters<MutationUpdaterFn<CreateSectionMutation>>[0]
    ) => {
        const count = getInboxCount(proxy)
        if (count !== undefined) {
            setInboxCount(proxy, count + 1)
        }
    }

    return {
        setInboxCount,
        getInboxCount,
        decrementInboxCount,
        incrementInboxCount,
    }
}

export const useSideNav = (authUserId: string) => {
    const updateSections = (
        proxy: Parameters<MutationUpdaterFn<CreateSectionMutation>>[0],
        mutationResult: Parameters<MutationUpdaterFn<CreateSectionMutation>>[1]
    ) => {
        const { data } = mutationResult
        if (data === undefined || data === null) {
            throw Error('Can not update cache because no data returned')
        }

        const cachedData = proxy.readQuery<GetSectionsQuery>({
            query: GetSectionsDocument,
            variables: {
                authUserId,
            },
        })

        if (
            cachedData !== null &&
            cachedData.sections &&
            data?.createEmptySection
        ) {
            proxy.writeQuery({
                variables: {
                    authUserId,
                },
                query: GetSectionsDocument,
                data: {
                    ...cachedData,
                    sections: cachedData.sections.concat(
                        data.createEmptySection
                    ),
                },
            })
        }
    }
    return { updateSections }
}
