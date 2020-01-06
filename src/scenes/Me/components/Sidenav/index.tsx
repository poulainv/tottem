import View from './View'
import { useGetSectionsQuery } from '../../../../generated/types'
import { useRouter } from 'next/router'
import { useApolloClient } from '@apollo/react-hooks'
import gql from 'graphql-tag'

export const useInboxCount = () => {
    const client = useApolloClient()
    const setInboxCount = (count: number) => {
        client.writeFragment({
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

export default ({ authUserId }: { authUserId: string }) => {
    const { data } = useGetSectionsQuery({
        variables: { authUserId },
        // pollInterval: 2000,
    })
    const { asPath } = useRouter()
    return (
        <View
            authUserId={authUserId}
            sections={data?.sections?.sort(
                (a, b) =>
                    new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime()
            )}
            inboxCount={data?.inbox?.count}
            currentHref={asPath}
        />
    )
}
