import { ContentBox } from '../../../components/Layout'
import { useGetItemsQuery } from '../../../generated/types'
import ItemList from '../../Collection/ItemList'
import DraggableList from './DraggableList'

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
            const items = data.items
                .filter(x => !x.isArchived)
                .sort(
                    (a, b) =>
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                )
                .sort((a, b) => a.position - b.position)
            return (
                <ContentBox>
                    <DraggableList items={items} collectionId={collectionId} />
                </ContentBox>
            )
        }
    }
}
