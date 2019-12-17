import * as React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { CollectionBasicFragment } from '../../../../generated/types'
import { useCollectionForm } from './hooks'

interface Props {
    collection: CollectionBasicFragment
    onChange?: () => void
    onSaved?: () => void
    onSaving?: () => void
}

export default ({ collection, onSaved, onSaving, onChange }: Props) => {
    const { onFormChange, register } = useCollectionForm(
        collection,
        onSaved,
        onSaving
    )

    return (
        <form
            id={`collection-form-${collection.id}`}
            className="flex flex-col"
            onChange={onFormChange}
        >
            <TextareaAutosize
                onChange={onChange}
                type="text"
                placeholder="Title"
                minRows={2}
                className="text-2xl resize-none outline-none text-gray-900"
                name="name"
                inputRef={register}
                defaultValue={collection.name}
            />
            <TextareaAutosize
                onChange={onChange}
                placeholder="Write additionnal description, if you want ..."
                className="mt-4 resize-none focus:border-blue-400 outline-none text-gray-700 leading-relaxed"
                name="detail"
                inputRef={register}
                minRows={2}
                defaultValue={collection.detail}
            />
        </form>
    )
}
