import {
    GetInboxDocument,
    GetItemsDocument,
    useMoveItemFromInboxToCollectionMutation,
} from '../../../generated/types'
import { useInboxCount } from '../components/Sidenav/hooks'
import {
    ItemDestination,
    useMoveItemModal,
} from '../components/MoveModal/hooks'

// Specify behavior of move item button from Inbox scene
export const useMoveItemFromInbox = () => {
    const [moveItem] = useMoveItemFromInboxToCollectionMutation()
    const { decrementInboxCount } = useInboxCount()

    const handleMove = (itemId: string, destination: ItemDestination) => {
        moveItem({
            variables: {
                itemId,
                collectionId: destination.destinationId,
            },
            update(proxy, _) {
                decrementInboxCount(proxy)
            },
            refetchQueries: [
                { query: GetInboxDocument },
                {
                    query: GetItemsDocument,
                    variables: { collectionId: destination.destinationId },
                },
            ],
        })
    }

    return useMoveItemModal(handleMove)
}
