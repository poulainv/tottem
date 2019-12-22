import debounce from 'lodash.debounce'
import { useCallback, useEffect } from 'react'
import useForm from 'react-hook-form'
import { useUpdateSectionMutation } from '../../../generated/types'

const useSectionForm = (
    sectionId: string,
    defaultTitle?: string,
    onSaved?: () => void,
    onSaving?: () => void
) => {
    const { register, getValues, setValue } = useForm<{ title: string }>()

    const [updateSection] = useUpdateSectionMutation({
        onCompleted: () => {
            if (onSaved !== undefined) {
                onSaved()
            }
        },
    })

    const submit = () => {
        const { title } = getValues()
        if (onSaving !== undefined) {
            onSaving()
        }

        updateSection({
            variables: {
                title,
                sectionId,
            },
        })
    }

    const debouncedSave = debounce(submit, 1000, { maxWait: 4000 })
    const onFormChange = useCallback(debouncedSave, [sectionId])

    useEffect(() => {
        setValue('title', defaultTitle === undefined ? '' : defaultTitle)
        return () => {
            // Prevent submit method to be called after page changes
            debouncedSave.cancel()
            // Save before unmount
            // submit()
        }
    }, [sectionId])

    return { onFormChange, register, submit }
}

export { useSectionForm }
