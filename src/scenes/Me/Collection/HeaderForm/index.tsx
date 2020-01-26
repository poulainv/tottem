import * as React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { CollectionBasicFragment } from '../../../../generated/types'
import { useCollectionForm } from './hooks'
import Options from './Options'
import { useStatusMessage } from '../../components/TopBar'

interface Props {
    collection: CollectionBasicFragment
}

export default ({ collection }: Props) => {
    const { dispatch } = useStatusMessage()
    const { onFormChange, register, submit } = useCollectionForm(
        collection,
        () => dispatch('SAVED'),
        () => dispatch('SAVING')
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
                        data-cy="title-collection"
                        autoFocus={!collection.title?.length} // autofocus only when collection unamed
                        onChange={() => dispatch('CHANGED')}
                        type="text"
                        placeholder="New collection"
                        minRows={1}
                        className="text-2xl resize-none outline-none text-gray-900 w-full"
                        name="name"
                        inputRef={register}
                        defaultValue={collection.title}
                        onBlur={submit}
                    />
                    <Options className="-pl-2" collectionId={collection.id} />
                </div>
                <TextareaAutosize
                    data-cy="detail-collection"
                    onChange={() => dispatch('CHANGED')}
                    placeholder="Notes"
                    className="mt-4 resize-none focus:border-blue-400 outline-none text-gray-700 leading-relaxed"
                    name="detail"
                    inputRef={register}
                    minRows={1}
                    defaultValue={collection.detail}
                    onBlur={submit}
                />
            </form>
        </div>
    )
}
