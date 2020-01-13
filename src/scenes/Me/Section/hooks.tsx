import debounce from 'lodash.debounce'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
    useDeleteSectionMutation,
    useUpdateSectionMutation,
    GetSectionsQuery,
    GetSectionsDocument,
} from '../../../generated/types'
import { notification } from 'antd'
import { useRouter } from 'next/router'
import { getUserAuth } from '../../../services/authentication'

const useDeleteSection = (sectionId: string, collectionCount: number) => {
    const router = useRouter()
    const [deleteSection] = useDeleteSectionMutation({
        variables: { sectionId },
        update(cache, { data }) {
            if (data === undefined || data === null) {
                throw Error('Can not update cache because no data returned')
            }
            const authUserId = getUserAuth(false)?.id // FIXME
            const cachedData = cache.readQuery<GetSectionsQuery>({
                query: GetSectionsDocument,
                variables: {
                    authUserId,
                },
            })

            if (cachedData !== null && cachedData.sections) {
                cache.writeQuery({
                    query: GetSectionsDocument,
                    variables: {
                        authUserId,
                    },
                    data: {
                        sections: cachedData.sections.filter(
                            x => x.id !== sectionId
                        ),
                    },
                })
            }
            router.push('/me')
        },
    })

    const handleDeleteSection = () => {
        if (collectionCount !== 0) {
            notification.error({
                placement: 'bottomRight',
                message: 'Unabled to delete space still containing collections',
            })
            return
        } else {
            deleteSection()
        }
    }

    return { handleDeleteSection }
}

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
        onCompleted: () => onSaved?.(),
    })

    const submit = (data: FormData) => {
        const { title } = data
        onSaving?.()

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

export { useSectionForm, useDeleteSection }
