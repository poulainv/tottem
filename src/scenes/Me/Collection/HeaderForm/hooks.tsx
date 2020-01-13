import debounce from 'lodash.debounce'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import slugify from 'slugify'
import {
    CollectionBasicFragment,
    useUpdateCollectionMutation,
    useDeleteCollectionMutation,
    useUnDeleteCollectionMutation,
} from '../../../../generated/types'
import { notification } from 'antd'
import { StyledButton } from '../../../../components/Button'
import { useRouter } from 'next/router'

interface CollectionFormData {
    name: string
    detail: string
}

// FIXME to migrate on backend side
const getCollectionSlug = (name: string, stableId: string) =>
    `${slugify(name.toLowerCase())}-${stableId}`

const useCollectionForm = (
    collection: CollectionBasicFragment,
    onSaved?: () => void,
    onSaving?: () => void
) => {
    const { register, getValues, setValue } = useForm<CollectionFormData>()

    const [updateCollection] = useUpdateCollectionMutation({
        onCompleted: () => {
            onSaved?.()
        },
    })

    const submit = () => {
        const { name, detail } = getValues()
        onSaving?.()
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
        setValue('name', collection.title || '')
        setValue('detail', collection.detail || '')
        return () => {
            // Prevent submit method to be called after page changes
            debouncedSave.cancel()
            // Save before unmount
            // submit()
        }
    }, [collection.id])

    return { onFormChange, register, submit }
}

const useDeleteCollection = () => {
    const router = useRouter()
    const [deleteCollection] = useDeleteCollectionMutation({
        onCompleted: ({ updateOneCollection }) => {
            const key = `open${Date.now()}`

            if (updateOneCollection === undefined) {
                return undefined
            }

            const handleUndelete = () => {
                undeleteCollection({
                    variables: { id: updateOneCollection.id },
                })
                notification.close(key)
            }

            notification.success({
                key,
                message: 'Collection deleted, redirection...',
                btn: <StyledButton onClick={handleUndelete}>Undo</StyledButton>,
                placement: 'bottomRight',
                duration: 4,
            })

            // Not ideal
            setTimeout(() => {
                router.replace(`/me/s/${updateOneCollection.section.id}`)
            }, 4500)
        },
    })
    const [undeleteCollection] = useUnDeleteCollectionMutation()

    const handleDelete = (id: string) => {
        deleteCollection({
            variables: {
                id,
            },
        })
    }
    return { handleDelete }
}

export { useCollectionForm, useDeleteCollection }
