import notification from 'antd/lib/notification'
import { StyledButton } from '../../../../components/Button'
import {
    ItemDetailFragment,
    ItemPreviewFragment,
    useChangePositionMutation,
    useDeleteItemMutation,
    useUndeleteItemMutation,
} from '../../../../generated/types'

const useDeleteItem = () => {
    const [deleteItem] = useDeleteItemMutation({
        onCompleted: ({ updateOneItem }) => {
            const key = `open${Date.now()}`
            if (updateOneItem === undefined) {
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
            optimisticResponse: {
                updateOneItem: {
                    id,
                    isDeleted: true,
                    __typename: 'Item',
                },
            },
        })
    }
    return { handleDelete }
}

// This function is used to assign new item position after drag end
// event. BE CARERUL be cause it's used in optimistic ui strategy
// with Apollo. This implementation must be the same than the one
// computed server-side on tottem-graphql. This method is unit-tested
// on API repo
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
    items?: Array<ItemPreviewFragment & ItemDetailFragment>
}

const useItemDragnDrop = ({ collectionId, items }: DndHooksProps) => {
    const [changePosition] = useChangePositionMutation()

    function onDragEnd(result: any) {
        if (!result.destination) {
            return
        }

        if (items === undefined) {
            return
        }

        if (result.destination.index === result.source.index) {
            return
        }

        const optimisticReAssignPosition = reAssignPosition(
            items.filter(x => !x.isDeleted),
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
                changeItemPosition: optimisticReAssignPosition.map(x => {
                    return {
                        id: x.id,
                        position: x.position,
                        title: x.title,
                        __typename: 'Item',
                    }
                }),
            },
        })

        return optimisticReAssignPosition
    }

    return { onDragEnd }
}

export { useDeleteItem, useItemDragnDrop }
