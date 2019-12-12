import View from './View'
import { useGetSectionsQuery } from '../../../generated/types'

export default ({ authUserId }: { authUserId: string }) => {
    const { data } = useGetSectionsQuery({
        variables: { authUserId },
        pollInterval: 2000,
    })

    return <View sections={data?.sections} inboxCount={12} />
}
