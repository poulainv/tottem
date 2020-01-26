import * as React from 'react'
import { Item } from '../../../../../generated/types'
import { ItemMetas } from '../../../../../components/ItemMetas'
import { useItemCommentForm } from './hooks'
import { PictogramItems } from '../../../../../components/PictogramItems'
import CoverImage from '../../../../../components/CoverImage'
import { useStatusMessage } from '../../TopBar'

interface IEditableItemProps {
    item: Item
}

const EditableItem: React.FunctionComponent<IEditableItemProps> = ({
    item,
}) => {
    const { dispatch } = useStatusMessage()
    const { register, onChange: onFormChange } = useItemCommentForm(
        item.id,
        () => dispatch('SAVED'),
        () => dispatch('SAVING')
    )
    const Pictogram = PictogramItems[item.type]
    return (
        <div className="shadow rounded-sm flex flex-row flex-shrink-0 w-full min-h-9">
            <div className="bg-gray-100 w-1/2 p-4 flex flex-col">
                <div className="flex flex-row items-start">
                    <a
                        href={item.productUrl}
                        className="w-16 xl:w-24 flex-shrink-0"
                        target="_blank"
                    >
                        <CoverImage item={item} />
                    </a>
                    <div className="flex flex-col py-1 mx-4 w-64">
                        <div className="flex flex-row items-center">
                            <div className="text-gray-700">
                                <Pictogram
                                    className="fill-current"
                                    height={14}
                                    width={14}
                                />
                            </div>
                            <a
                                data-cy="title-item"
                                href={item.productUrl}
                                target="_blank"
                                className="font-medium text-gray-900 px-2 leading-tight truncate"
                            >
                                {item.title}
                            </a>
                        </div>
                        <div className="text-gray-700 truncate mt-3">
                            {item.author}
                        </div>
                        <div className="text-gray-600 mt-4 w-64">
                            <ItemMetas item={item} />
                        </div>
                    </div>
                </div>
                {item.description && (
                    <div className="mt-4 text-gray-900 truncate">
                        {item.description}
                    </div>
                )}
            </div>
            <form
                className="w-1/2 min-h-full"
                onChange={() => dispatch('CHANGED')}
            >
                <textarea
                    name={`itemComment`}
                    ref={register}
                    className="p-4 whitespace-pre-line resize-none w-full min-h-full outline-none focus:shadow-outline text-gray-900"
                    placeholder="Quick note"
                    defaultValue={item.comment === null ? '' : item.comment}
                    onChange={onFormChange}
                />
            </form>
        </div>
    )
}

export default React.memo(EditableItem)
