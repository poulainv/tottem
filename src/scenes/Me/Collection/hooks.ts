import {
    GetItemsDocument,
    useMoveItemFromCollectionToCollectionMutation,
} from '../../../generated/types'

// Specify behavior of move item button from Collection scene
export const useMoveItemToCollection = (fromCollectionId: string) => (
    itemId: string
) => {
    const [moveItem] = useMoveItemFromCollectionToCollectionMutation()
    const handleMove = (toCollectionId: string) => {
        moveItem({
            variables: {
                itemId,
                collectionId: toCollectionId,
            },
            // Refresh collection in & out by refetching data
            refetchQueries: [
                {
                    query: GetItemsDocument,
                    variables: { collectionId: fromCollectionId },
                },
                {
                    query: GetItemsDocument,
                    variables: { collectionId: toCollectionId },
                },
            ],
        })
    }
    return { handleMove }
}
