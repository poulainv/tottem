import * as React from 'react'
import debounce from 'lodash.debounce'
import { useSaveCommentItemMutation } from '../../../../generated/types'
import { useForm } from 'react-hook-form'

const useItemCommentForm = (
    itemId: string,
    onSaved?: () => void,
    onSaving?: () => void
) => {
    const [saveComment] = useSaveCommentItemMutation({
        onCompleted: () => {
            if (onSaved) {
                onSaved()
            }
        },
    })
    const { register, getValues } = useForm<{ itemComment: string }>()
    React.useEffect(() => {
        return () => {
            debouncedSave.cancel()
        }
    }, [itemId])
    const submit = () => {
        const { itemComment } = getValues()
        if (onSaving) {
            onSaving()
        }
        saveComment({ variables: { comment: itemComment, id: itemId } })
    }
    const debouncedSave = debounce(submit, 1500, { maxWait: 5000 })
    const onChange = React.useCallback(debouncedSave, [itemId])

    return { register, onChange }
}

export { useItemCommentForm }
