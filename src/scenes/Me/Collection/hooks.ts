import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
    GetInboxDocument,
    GetItemsDocument,
    GetSectionsDocument,
    useCreateEmptyCollectionMutation,
    useMoveItemFromCollectionToCollectionMutation,
    useMoveItemFromCollectionToInboxMutation,
} from '../../../generated/types'
import {
    ItemDepart,
    ItemDestination,
    useMoveItemModal,
} from '../components/MoveModal/hooks'
import { useInboxCount } from '../components/Sidenav/hooks'
import {
    ItemActions,
    defaultItemActions,
} from '../components/DraggableList/EditableItem/hooks'

export const useCreateEmptyCollection = (
    sectionId: string,
    authUserId: string
) => {
    const router = useRouter()
    return useCreateEmptyCollectionMutation({
        variables: { sectionId },
        onCompleted: data => {
            router.push('/me/c/[collectionId]', `/me/c/${data.collection.id}`)
        },
        refetchQueries: [
            { query: GetSectionsDocument, variables: { authUserId } },
        ],
    })
}

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
        if (
            destination.type === 'collection' &&
            destination.destinationId !== collectionDepart.destinationId
        ) {
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

    const collectionDepart: ItemDepart = {
        destinationId: fromCollectionId,
        type: 'collection',
    }

    // FIXME returning array after destructing does not work :/
    // + modal + move logic should be disconnected
    const [state, dispatch] = useMoveItemModal(collectionDepart, handleMove)

    useEffect(() => {
        dispatch({ type: 'DEPART_CHANGED', depart: collectionDepart })
    }, [fromCollectionId])

    const actions: ItemActions = Object.assign(defaultItemActions, {
        triggerMoveItem: (itemId: string) =>
            dispatch({ type: 'TRIGGER_ITEM_MOVE', itemId }),
    })

    return { state, dispatch, actions }
}
