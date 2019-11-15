import ItemList from '../../ItemList'
import { useItems } from './query'
import { Item } from '../../types'

export default ({ collectionId }: { collectionId?: string }) => {
    if (collectionId === undefined) {
        return <div> No items yep</div>
    } else {
        const { data, loading } = useItems(collectionId)
        if (data === undefined || loading) {
            return <div> Wait .... </div>
        } else {
            const items = data.collection.items.sort(
                (a: Item, b: Item) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
            )
            return <ItemList items={items} />
        }
    }
}
