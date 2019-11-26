import {
    useDeleteItemMutation,
    useUndeleteItemMutation,
    ItemPreviewFragment,
    ItemDetailFragment,
    useChangePositionMutation,
} from '../../../../generated/types'
import { StyledButton } from '../../../../components/Button'
import notification from 'antd/lib/notification'

const useDeleteItem = () => {
    const [deleteItem] = useDeleteItemMutation({
        onCompleted: ({ updateOneItem }) => {
            const key = `open${Date.now()}`

            if (updateOneItem === null) {
                return undefined
            }

            const handleUndelete = () => {
                undeleteItem({ variables: { id: updateOneItem.id } })
                notification.close(key)
            }

            notification.success({
                key,
                message: 'Item deleted',
                btn: <StyledButton onClick={handleUndelete}>Undo</StyledButton>,
                placement: 'bottomRight',
                duration: 6,
            })
        },
    })
    const [undeleteItem] = useUndeleteItemMutation()

    const handleDelete = (id: string) => {
        deleteItem({
            variables: {
                id,
            },
        })
    }
    return handleDelete
}

// This function is used to assign new item position after drag end
// event. BE CARERUL be cause it's used in optimistic ui strategy
// with Apollo. This implementation must be the same than the one
// computed server-side on tottem-graphql

function reAssignPosition<T extends { position: number }>(
    array: T[],
    startIndex: number,
    endIndex: number
) {
    const result = Array.from(array)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result.flatMap((x, index) => {
        if (index === x.position) {
            return []
        } else {
            return {
                ...x,
                position: index,
            }
        }
    })
}

interface DndHooksProps {
    collectionId: string
    items: Array<ItemPreviewFragment & ItemDetailFragment>
}

const useItemDragnDrop = ({ collectionId, items }: DndHooksProps) => {
    const [changePosition] = useChangePositionMutation()

    function onDragEnd(result: any) {
        if (!result.destination) {
            return
        }

        if (result.destination.index === result.source.index) {
            return
        }
        const optimisticreAssignPosition = reAssignPosition(
            items,
            result.source.index,
            result.destination.index
        )

        changePosition({
            variables: {
                collectionId,
                oldIndex: result.source.index,
                newIndex: result.destination.index,
            },
            optimisticResponse: {
                changeItemPosition: optimisticreAssignPosition.map(x => {
                    return {
                        id: x.id,
                        position: x.position,
                        title: x.title,
                        __typename: 'Item',
                    }
                }),
            },
        })
    }

    return { onDragEnd }
}

export { useDeleteItem, useItemDragnDrop }
