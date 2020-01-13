import * as React from 'react'
import debounce from 'lodash.debounce'
import { useSaveCommentItemMutation } from '../../../../../generated/types'
import { useDeleteItem } from '../hooks'
import { useForm } from 'react-hook-form'

export interface ItemActions {
    useDeleteItem: typeof useDeleteItem
    triggerMoveItem: (itemId: string) => void
}

export const defaultItemActions: ItemActions = {
    triggerMoveItem: () => {
        throw new Error('useMoveItem should be provided')
    },
    useDeleteItem,
}

export const ItemActionsContext = React.createContext<ItemActions>(
    defaultItemActions
)

// FIXME it should be part of ItemActions
const useItemCommentForm = (
    itemId: string,
    onSaved?: () => void,
    onSaving?: () => void
) => {
    const [saveComment] = useSaveCommentItemMutation({
        onCompleted: () => onSaved?.(),
    })
    const { register, getValues } = useForm<{ itemComment: string }>()
    React.useEffect(() => {
        return () => {
            debouncedSave.cancel()
        }
    }, [itemId])
    const submit = () => {
        const { itemComment } = getValues()
        onSaving?.()
        saveComment({ variables: { comment: itemComment, id: itemId } })
    }
    const debouncedSave = debounce(submit, 1500, { maxWait: 5000 })
    const onChange = React.useCallback(debouncedSave, [itemId])

    return { register, onChange }
}

export { useItemCommentForm }
