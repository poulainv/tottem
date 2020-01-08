import {
    GetInboxDocument,
    GetItemsDocument,
    useMoveItemFromInboxToCollectionMutation,
} from '../../../generated/types'
import { useInboxCount } from '../components/Sidenav/hooks'
import {
    ItemDestination,
    useMoveItemModal,
    ItemDepart,
} from '../components/MoveModal/hooks'

const inboxDepart: ItemDepart = {
    destinationId: 'me',
    type: 'inbox',
}

// Specify behavior of move item button from Inbox scene
export const useMoveItemFromInbox = () => {
    const [moveItem] = useMoveItemFromInboxToCollectionMutation()
    const { decrementInboxCount } = useInboxCount()

    const handleMove = (itemId: string, destination: ItemDestination) => {
        if (destination.type === 'inbox') {
            return
        }
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

    return useMoveItemModal(inboxDepart, handleMove)
}
