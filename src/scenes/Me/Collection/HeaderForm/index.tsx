import * as React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { CollectionBasicFragment } from '../../../../generated/types'
import { useCollectionForm } from './hooks'
import Options from './Options'

interface Props {
    collection: CollectionBasicFragment
    onChange?: () => void
    onSaved?: () => void
    onSaving?: () => void
}

export default ({ collection, onSaved, onSaving, onChange }: Props) => {
    const { onFormChange, register, submit } = useCollectionForm(
        collection,
        onSaved,
        onSaving
    )

    return (
        <div className="flex flex-row">
            <form
                id={`collection-form-${collection.id}`}
                className="flex flex-col w-full flex-shrink-0"
                onChange={onFormChange}
            >
                <div className="flex flex-row w-full">
                    <TextareaAutosize
                        autoFocus
                        onChange={onChange}
                        type="text"
                        placeholder="New collection title"
                        minRows={1}
                        className="text-2xl resize-none outline-none text-gray-900 w-full"
                        name="name"
                        inputRef={register}
                        defaultValue={collection.name}
                        onBlur={submit}
                    />
                </div>
                <TextareaAutosize
                    onChange={onChange}
                    placeholder="Write additionnal description, if you want ..."
                    className="mt-4 resize-none focus:border-blue-400 outline-none text-gray-700 leading-relaxed"
                    name="detail"
                    inputRef={register}
                    minRows={2}
                    defaultValue={collection.detail}
                    onBlur={submit}
                />
            </form>
            <Options className="-pl-2" collectionId={collection.id} />
        </div>
    )
}
