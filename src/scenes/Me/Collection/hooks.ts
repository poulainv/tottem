import {
    GetItemsDocument,
    useMoveItemFromCollectionToCollectionMutation,
} from '../../../generated/types'
import {
    ItemDestination,
    useMoveItemModal,
} from '../components/MoveModal/hooks'

// Specify behavior of move item button from Collection scene
export const useMoveItemFromCollection = (fromCollectionId: string) => {
    const [moveItem] = useMoveItemFromCollectionToCollectionMutation()
    const handleMove = (itemId: string, destination: ItemDestination) => {
        moveItem({
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
                    variables: { collectionId: destination.destinationId },
                },
            ],
        })
    }
    return useMoveItemModal(handleMove)
}
