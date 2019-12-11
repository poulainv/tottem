import View from './View'
import { useGetSectionsQuery } from '../../../generated/types'
import Skeleton from './Skeleton'

export default ({ authUserId }: { authUserId: string }) => {
    const { data, loading } = useGetSectionsQuery({
        variables: { authUserId },
    })

    return <View sections={data?.sections} inboxCount={12} />
}
