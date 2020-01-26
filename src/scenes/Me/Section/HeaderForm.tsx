import classNames from 'classnames'
import * as React from 'react'
import SpaceIcon from '../../../../public/pictograms/space.svg'
import { useSectionForm } from './hooks'

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
    return (
        <form
            id={`section-form-${sectionId}`}
            className={classNames('flex flex-row items-center', className)}
            onSubmit={handleSubmit}
        >
            <SpaceIcon
                height={24}
                width={24}
                className="fill-current text-yellow-600"
            />
            <input
                data-cy="title-space"
                autoFocus={!title?.length} // autofocus only when section unamed
                onChange={onFormChange}
                type="text"
                placeholder="New Space"
                className="text-2xl resize-none outline-none text-gray-900 ml-2 flex-grow"
                name="title"
                ref={register({ required: true })}
                defaultValue={title}
                onBlur={handleSubmit}
            />
        </form>
    )
}
