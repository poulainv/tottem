import {
    GetInboxDocument,
    GetItemsDocument,
    useMoveItemFromInboxToCollectionMutation,
} from '../../../generated/types'
import { defaultActions } from '../components/DraggableList/EditableItem/hooks'
import { useInboxCount } from '../components/Sidenav/hooks'

const useMoveItemToCollection = (itemId: string) => {
    const [moveItem] = useMoveItemFromInboxToCollectionMutation()
    const { decrementInboxCount } = useInboxCount()
    const handleMove = (toCollectionId: string) => {
        moveItem({
            variables: {
                itemId,
                collectionId: toCollectionId,
            },
            update(proxy, _) {
                decrementInboxCount(proxy)
            },
            refetchQueries: [
                { query: GetInboxDocument },
                {
                    query: GetItemsDocument,
                    variables: { collectionId: toCollectionId },
                },
            ],
        })
    }
    return { handleMove }
}

export const InboxItemActions = Object.assign(defaultActions, {
    useMoveItem: useMoveItemToCollection,
})
