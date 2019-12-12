import debounce from 'lodash.debounce'
import { useCallback, useEffect } from 'react'
import useForm from 'react-hook-form'
import slugify from 'slugify'
import getUuid from 'uuid-by-string'
import {
    useUpdateCollectionMutation,
    CollectionBasicFragment,
} from '../../../../generated/types'

interface CollectionFormData {
    name: string
    detail: string
}

const getCollectionSlug = (name: string, stableId: string) =>
    `${slugify(name.toLowerCase())}-${stableId}`

const useCollectionForm = (
    collection: CollectionBasicFragment,
    onSaved?: (collectionId: string) => void,
    onSaving?: () => void
) => {
    const { register, getValues, setValue } = useForm<CollectionFormData>()

    const [updateCollection] = useUpdateCollectionMutation({
        onCompleted: (data: { collection: any }) => {
            if (onSaved !== undefined) {
                onSaved(data.collection.id)
            }
        },
    })

    useEffect(() => {
        setValue('name', collection.name)
        setValue('detail', collection.detail || '')
    }, [collection.id])

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

    const onFormChange = useCallback(
        debounce(submit, 1500, { maxWait: 5000 }),
        [collection.id]
    )
    return { onFormChange, register }
}

export { useCollectionForm }
