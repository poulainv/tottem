import {
    GetInboxDocument,
    GetItemsDocument,
    useMoveItemFromCollectionToCollectionMutation,
    useMoveItemFromCollectionToInboxMutation,
} from '../../../generated/types'
import {
    ItemDestination,
    useMoveItemModal,
} from '../components/MoveModal/hooks'
import { useInboxCount } from '../components/Sidenav/hooks'

// Specify behavior of move item button from Collection scene
export const useMoveItemFromCollection = (
    fromCollectionId: string,
    authUserId: string
) => {
    const [
        moveItemToCollection,
    ] = useMoveItemFromCollectionToCollectionMutation()
    const [moveItemToInbox] = useMoveItemFromCollectionToInboxMutation()
    const { incrementInboxCount } = useInboxCount()
    const handleMove = (itemId: string, destination: ItemDestination) => {
        if (destination.type === 'inbox') {
            moveItemToInbox({
                variables: {
                    itemId,
                    authUserId,
                },
                update(proxy) {
                    incrementInboxCount(proxy)
                },
                // Refresh collection in & out by refetching data
                refetchQueries: [
                    {
                        query: GetInboxDocument,
                    },
                    {
                        query: GetItemsDocument,
                        variables: { collectionId: fromCollectionId },
                    },
                ],
            })
        }
        if (destination.type === 'collection') {
            moveItemToCollection({
                variables: {
                    itemId,
                    collectionId: destination.destinationId,
                },
                // Refresh collection in & out by refetching data
                refetchQueries: [
                    {
                        query: GetItemsDocument,
                        variables: { collectionId: fromCollectionId },
                    },
                    {
                        query: GetItemsDocument,
                        variables: {
                            collectionId: destination.destinationId,
                        },
                    },
                ],
            })
        }
    }
    return useMoveItemModal(handleMove)
}
