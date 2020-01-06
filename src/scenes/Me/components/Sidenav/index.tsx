import View from './View'
import { useGetSectionsQuery } from '../../../../generated/types'
import { useRouter } from 'next/router'

export default ({ authUserId }: { authUserId: string }) => {
    const { data } = useGetSectionsQuery({
        variables: { authUserId },
        // pollInterval: 2000,
    })
    const { asPath } = useRouter()
    return (
        <View
            sections={data?.sections?.sort(
                (a, b) =>
                    new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime()
            )}
            inboxCount={12}
            currentHref={asPath}
        />
    )
}
