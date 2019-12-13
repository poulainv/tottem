import * as React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { CollectionBasicFragment } from '../../../../generated/types'
import { useCollectionForm } from './hooks'

interface Props {
    collection: CollectionBasicFragment
    onChange?: () => void
    onSaved?: (collectionId: string) => void
    onSaving?: () => void
}

export default ({ collection, onSaved, onSaving }: Props) => {
    const { onFormChange, register } = useCollectionForm(
        collection,
        onSaved,
        onSaving
    )
    return (
        <form
            id={`collection-form-${collection.id}`}
            className="max-w-4xl mx-auto mt-2 flex flex-col"
            onChange={onFormChange}
        >
            <TextareaAutosize
                type="text"
                placeholder="Title"
                minRows={2}
                className="text-2xl resize-none outline-none"
                name="name"
                inputRef={register}
            />
            <TextareaAutosize
                placeholder="Write additionnal description, if you want ..."
                className="mt-1 resize-none focus:border-blue-400 outline-none"
                name="detail"
                inputRef={register}
                minRows={2}
            />
        </form>
    )
}
