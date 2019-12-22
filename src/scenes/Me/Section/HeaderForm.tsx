import * as React from 'react'
import SpaceIcon from '../../../../public/pictograms/space.svg'
import classNames from 'classnames'
import { useSectionForm } from './hooks'

export interface IHeaderFormProps {
    className?: string
    sectionId: string
    title?: string
}

export default ({ sectionId, title, className }: IHeaderFormProps) => {
    const { register, onFormChange, submit } = useSectionForm(sectionId, title)
    return (
        <form
            id={`section-form-${sectionId}`}
            className={classNames(
                'flex flex-col w-full flex-shrink-0',
                className
            )}
        >
            <div className="flex flex-row w-full items-center">
                <SpaceIcon
                    height={24}
                    width={24}
                    className="fill-current text-yellow-600"
                />
                <input
                    onChange={onFormChange}
                    type="text"
                    placeholder="New Space"
                    className="text-2xl resize-none outline-none text-gray-900 w-full ml-2"
                    name="title"
                    ref={register}
                    defaultValue={title}
                    onBlur={submit}
                />
            </div>
        </form>
    )
}
