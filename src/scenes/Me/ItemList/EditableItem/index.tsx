import * as React from 'react'
import { Item } from '../../../../generated/types'
import { ItemMetas } from '../../../Collection/ItemMetas'
import { useItemCommentForm } from './hooks'
import { ModificationTrackActions } from '../../../common'
import { PictogramItems } from '../../../../components/PictogramItems'

interface IEditableItemProps {
    item: Item
}

const EditableItem: React.FunctionComponent<IEditableItemProps &
    ModificationTrackActions> = ({ item, onChange, onSaved, onSaving }) => {
    const { register, onChange: onFormChange } = useItemCommentForm(
        item.id,
        onSaved,
        onSaving
    )
    const Pictogram = PictogramItems[item.type]
    return (
        <div className="shadow rounded-sm flex flex-row flex-shrink-0 w-full min-h-9">
            <div className="bg-gray-100 w-1/2 p-4 flex flex-col">
                <div className="flex flex-row items-start">
                    <img
                        className="object-contain w-24 rounded"
                        src={item.imageUrl}
                        alt=""
                    />
                    <div className="flex flex-col py-1 mx-4 w-64">
                        <div className="flex flex-row items-center">
                            <div className="text-gray-700">
                                <Pictogram
                                    className="fill-current"
                                    height={14}
                                    width={14}
                                />
                            </div>
                            <div className="font-medium text-gray-900 px-2 leading-none truncate ">
                                {item.title}
                            </div>
                        </div>
                        <div className="text-gray-700 leading-none truncate mt-3">
                            {item.author}
                        </div>
                        <div className="text-gray-600 mt-4 w-64">
                            <ItemMetas item={item} />
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-gray-900 truncate">
                    {item.description}
                </div>
            </div>
            <form className="w-1/2 min-h-full" onChange={onChange}>
                <textarea
                    name={`itemComment`}
                    ref={register}
                    className="p-4 whitespace-pre-line resize-none w-full min-h-full outline-none focus:shadow-outline text-gray-900"
                    placeholder="Add quick note..."
                    defaultValue={item.comment === null ? '' : item.comment}
                    onChange={onFormChange}
                />
            </form>
        </div>
    )
}

export default React.memo(EditableItem)
