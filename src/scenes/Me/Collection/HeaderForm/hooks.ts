import debounce from 'lodash.debounce'
import { useCallback, useEffect, useState } from 'react'
import useForm from 'react-hook-form'
import slugify from 'slugify'
import {
    CollectionBasicFragment,
    useUpdateCollectionMutation,
} from '../../../../generated/types'

interface CollectionFormData {
    name: string
    detail: string
}

const getCollectionSlug = (name: string, stableId: string) =>
    `${slugify(name.toLowerCase())}-${stableId}`

const useCollectionForm = (
    collection: CollectionBasicFragment,
    onSaved?: () => void,
    onSaving?: () => void
) => {
    const { register, getValues, setValue } = useForm<CollectionFormData>()

    const [updateCollection] = useUpdateCollectionMutation({
        onCompleted: (_: { collection: any }) => {
            if (onSaved !== undefined) {
                onSaved()
            }
        },
    })

    const submit = () => {
        const { name, detail } = getValues()
        if (onSaving !== undefined) {
            onSaving()
        }

        updateCollection({
            variables: {
                name,
                detail,
                collectionId: collection.id,
                slug: getCollectionSlug(name, collection.id),
            },
        })
    }

    const debouncedSave = debounce(submit, 1500, { maxWait: 5000 })
    const onFormChange = useCallback(debouncedSave, [collection.id])

    useEffect(() => {
        setValue('name', collection.name)
        setValue('detail', collection.detail || '')
        return () => {
            // Prevent submit method to be called after page changes
            debouncedSave.cancel()
            // Save before unmount
            // submit()
        }
    }, [collection.id])

    return { onFormChange, register }
}

export { useCollectionForm }
