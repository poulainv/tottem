import View from './View'
import { useGetSectionsQuery } from '../../../../generated/types'
import { useRouter } from 'next/router'
import { useApolloClient } from '@apollo/react-hooks'
import gql from 'graphql-tag'

export default ({ authUserId }: { authUserId: string }) => {
    const { data } = useGetSectionsQuery({
        variables: { authUserId },
    })
    const { asPath } = useRouter()
    return (
        <View
            currentUserSlug={data?.user?.slug}
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
