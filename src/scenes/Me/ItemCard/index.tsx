import * as React from 'react'
import { Item } from '../../../generated/types'
import { ItemMetas } from '../../Collection/ItemMetas'

interface IItemCardProps {
    item: Item
}

const ItemCard: React.FunctionComponent<IItemCardProps> = ({ item }) => {
    return (
        <div className="shadow rounded-sm flex flex-row">
            <div className="bg-gray-100 w-1/2 p-4 flex flex-col">
                <div className="flex flex-row items-start">
                    <img
                        className="object-contain w-24 rounded"
                        src={item.imageUrl}
                        alt=""
                    />
                    <div className="flex flex-col py-1 mx-4 w-64">
                        <div className="flex flex-row items-center">
                            <img
                                className="h-4"
                                src={`/pictograms/${item.type}.svg`}
                            />
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
            <textarea
                className="p-4 whitespace-pre-line resize-none w-1/2"
                placeholder="Add your note..."
                value={item.comment === null ? '' : item.comment}
            />
        </div>
    )
}

export default ItemCard
