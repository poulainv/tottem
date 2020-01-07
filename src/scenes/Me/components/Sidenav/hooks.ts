import { useApolloClient } from '@apollo/react-hooks'
import {} from 'apollo-cache-inmemory'
import { MutationUpdaterFn } from 'apollo-client'
import gql from 'graphql-tag'
import {
    CreateSectionMutation,
    GetSectionsDocument,
    GetSectionsQuery,
    CreateEmptyCollectionMutation,
} from '../../../../generated/types'

export const useInboxCount = () => {
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
    return { setInboxCount }
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
