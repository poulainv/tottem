import * as React from 'react'
import SpaceIcon from '../../../../public/pictograms/space.svg'
import PlusIcon from '../../../../public/pictograms/plus.svg'
import classNames from 'classnames'
import { useSectionForm } from './hooks'
import { useCreateEmptyCollectionMutation } from '../../../generated/types'
import { useRouter } from 'next/router'
import { Tooltip } from 'antd'

export interface IHeaderFormProps {
    className?: string
    sectionId: string
    title?: string
}

export default ({ sectionId, title, className }: IHeaderFormProps) => {
    const { register, onFormChange, handleSubmit } = useSectionForm(
        sectionId,
        title
    )

    const router = useRouter()
    const [createCollection] = useCreateEmptyCollectionMutation({
        variables: { sectionId },
        onCompleted: data => {
            router.push(`/me/c/${data.collection.id}`)
        },
    })

    const handleCreationCollection = () => {
        createCollection()
    }
    return (
        <form
            id={`section-form-${sectionId}`}
            className={classNames(
                'flex flex-col w-full flex-shrink-0',
                className
            )}
            onSubmit={handleSubmit}
        >
            <div className="flex flex-row w-full items-center">
                <SpaceIcon
                    height={24}
                    width={24}
                    className="fill-current text-yellow-600"
                />
                <input
                    autoFocus
                    onChange={onFormChange}
                    type="text"
                    placeholder="New Space"
                    className="text-2xl resize-none outline-none text-gray-900 ml-2 flex-grow"
                    name="title"
                    ref={register({ required: true })}
                    defaultValue={title}
                    onBlur={handleSubmit}
                />
                <Tooltip title={'Create collection in this space'}>
                    <div
                        onClick={() => handleCreationCollection()}
                        className="h-8 w-8 rounded-full text-red-700 border border-brand-700 flex justify-center items-center cursor-pointer"
                    >
                        <PlusIcon className="fill-current" />
                    </div>
                </Tooltip>
            </div>
        </form>
    )
}
