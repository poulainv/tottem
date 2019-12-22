import debounce from 'lodash.debounce'
import { useCallback, useEffect } from 'react'
import useForm from 'react-hook-form'
import { useUpdateSectionMutation } from '../../../generated/types'

interface FormData {
    title: string
}

const useSectionForm = (
    sectionId: string,
    defaultTitle?: string,
    onSaved?: () => void,
    onSaving?: () => void
) => {
    const { register, getValues, setValue, handleSubmit } = useForm<FormData>()

    const [updateSection] = useUpdateSectionMutation({
        onCompleted: () => {
            if (onSaved !== undefined) {
                onSaved()
            }
        },
    })

    const submit = (data: FormData) => {
        const { title } = data
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

    const autoSave = () => {
        submit(getValues())
    }

    const debouncedSave = debounce(autoSave, 1000, { maxWait: 4000 })
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

    return { onFormChange, register, handleSubmit: handleSubmit(submit) }
}

export { useSectionForm }
