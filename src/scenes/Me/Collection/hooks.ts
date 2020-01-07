import {
    GetItemsDocument,
    useMoveItemFromCollectionToCollectionMutation,
} from '../../../generated/types'

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
