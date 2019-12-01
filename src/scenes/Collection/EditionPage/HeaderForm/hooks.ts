import debounce from 'lodash.debounce'
import { useCallback, useState } from 'react'
import useForm from 'react-hook-form'
import slugify from 'slugify'
import getUuid from 'uuid-by-string'
import {
    useCreateCollectionMutation,
    useUpdateCollectionMutation,
    Collection,
    CollectionBasicFragment,
} from '../../../../generated/types'

interface CollectionFormData {
    name: string
    detail: string
}

const getCollectionSlug = (name: string, stableId: string | undefined) =>
    `${slugify(name.toLowerCase())}-${stableId &&
        getUuid(stableId).slice(0, 4)}`

const useCollectionForm = (
    initialCollection?: CollectionBasicFragment,
    sectionId?: string,
    profile?: string,
    onSaved?: (collectionId: string) => void,
    onSaving?: () => void
) => {
    const { register, getValues } = useForm<CollectionFormData>()

    const [collectionId, setCollectionId] = useState(
        initialCollection && initialCollection.id
    )

    const [addCollection] = useCreateCollectionMutation({
        onCompleted: (data: { collection: any }) => {
            if (onSaved !== undefined) {
                onSaved(data.collection.id)
            }
            setCollectionId(data.collection.id)
        },
    })

    const [updateCollection] = useUpdateCollectionMutation({
        onCompleted: (data: { collection: any }) => {
            if (onSaved !== undefined) {
                onSaved(data.collection.id)
            }
        },
    })

    const submit = () => {
        const { name, detail } = getValues()
        if (onSaving !== undefined) {
            onSaving()
        }
        if (
            collectionId === undefined &&
            profile !== undefined &&
            sectionId !== undefined
        ) {
            addCollection({
                variables: {
                    name,
                    detail,
                    slug: getCollectionSlug(name, sectionId),
                    sectionId,
                    ownerSlug: profile,
                },
            })
        } else if (collectionId !== undefined) {
            updateCollection({
                variables: {
                    name,
                    detail,
                    collectionId,
                    slug: getCollectionSlug(name, collectionId),
                },
            })
        }
    }

    const onFormChange = useCallback(
        debounce(submit, 1500, { maxWait: 5000 }),
        [collectionId]
    )
    return { onFormChange, register }
}

export { useCollectionForm }
