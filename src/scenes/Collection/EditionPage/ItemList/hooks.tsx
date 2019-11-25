import {
    useDeleteItemMutation,
    useUndeleteItemMutation,
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

export { useDeleteItem }
