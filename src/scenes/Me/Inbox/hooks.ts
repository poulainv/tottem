import {
    GetInboxDocument,
    GetItemsDocument,
    useMoveItemFromInboxToCollectionMutation,
} from '../../../generated/types'
import { defaultItemActions } from '../components/DraggableList/EditableItem/hooks'
import {
    ItemDepart,
    ItemDestination,
    useMoveItemModal,
} from '../components/MoveModal/hooks'
import { useInboxCount } from '../components/Sidenav/hooks'
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

    const [state, dispatch] = useMoveItemModal(inboxDepart, handleMove)

    const actions = Object.assign(defaultItemActions, {
        triggerMoveItem: (itemId: string) =>
            dispatch({ type: 'TRIGGER_ITEM_MOVE', itemId }),
    })

    return { state, dispatch, actions }
}
