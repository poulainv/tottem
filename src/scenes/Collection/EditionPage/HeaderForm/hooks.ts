import { useMutation } from '@apollo/react-hooks'
import debounce from 'lodash.debounce'
import useForm from 'react-hook-form'
import slugify from 'slugify'
import { newCollectionQuery, updateCollectionQuery } from './query'
import { ICollection } from '../../types'
import { useState, useCallback } from 'react'

interface CollectionFormData {
    name: string
    detail: string
}

const useCollectionForm = (
    initialCollection?: ICollection,
    sectionId?: string,
    profile?: string,
    onSaved?: (collectionId: string) => void,
    onSaving?: () => void
) => {
    const { register, getValues } = useForm<CollectionFormData>({
        defaultValues: {
            name: initialCollection && initialCollection.name,
            detail: initialCollection && (initialCollection.detail || ''),
        },
    })

    const [collectionId, setCollectionId] = useState(
        initialCollection && initialCollection.id
    )

    const [addCollection] = useMutation(newCollectionQuery, {
        onCompleted: (data: { collection: any }) => {
            if (onSaved !== undefined) {
                onSaved(data.collection.id)
            }
            setCollectionId(data.collection.id)
        },
    })

    const [updateCollection] = useMutation(updateCollectionQuery, {
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
        if (collectionId === undefined) {
            addCollection({
                variables: {
                    name,
                    detail,
                    slug: slugify(name.toLowerCase()),
                    sectionId,
                    ownerSlug: profile,
                },
            })
        } else {
            updateCollection({
                variables: {
                    name,
                    detail,
                    collectionId,
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
