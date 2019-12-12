import * as React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { CollectionBasicFragment } from '../../../generated/types'
import { AuthenticatedUser } from '../../../services/authentication'
import Sidenav from '../Sidenav'
import { useCollectionForm } from './HeaderForm/hooks'

interface Props {
    authUser: AuthenticatedUser
    collection: CollectionBasicFragment
}

export default ({ collection, authUser }: Props) => {
    const { onFormChange, register } = useCollectionForm(collection)

    return (
        <div className="flex h-screen text-sm">
            <Sidenav authUserId={authUser.id} />
            <main className="flex-1 text-sm">
                {collection.name}
                <form
                    id={`collection-form-${collection.id}`}
                    className="max-w-4xl mx-auto mt-2 flex flex-col"
                    onChange={onFormChange}
                >
                    <TextareaAutosize
                        type="text"
                        minRows={2}
                        className="text-2xl resize-none"
                        name="name"
                        inputRef={register}
                    />
                    <TextareaAutosize
                        className="mt-1 resize-none"
                        name="detail"
                        inputRef={register}
                        minRows={2}
                    ></TextareaAutosize>
                </form>
            </main>
        </div>
    )
}
