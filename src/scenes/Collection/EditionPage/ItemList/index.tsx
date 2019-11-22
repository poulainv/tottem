import ItemList from '../../ItemList'
import { useGetItemsQuery } from '../../../../generated/types'

export default ({ collectionId }: { collectionId?: string }) => {
    if (collectionId === undefined) {
        return <ItemList items={[]} />
    } else {
        const { data, loading } = useGetItemsQuery({
            variables: {
                collectionId,
            },
        })
        if (data === undefined || data.items === null || loading) {
            return <ItemList items={[]} />
        } else {
            const items = data.items.sort(
                (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
            )
            return <ItemList items={items} />
        }
    }
}
