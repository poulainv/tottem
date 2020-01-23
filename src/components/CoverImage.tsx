import classNames from 'classnames'
import * as React from 'react'
import { PictogramItems } from './PictogramItems'
import { Item } from '../generated/types'
import { ItemType } from '../scenes/common'

export interface CoverImageProps {
    item: Pick<Item, 'imageUrl' | 'type'>
    className?: string
}

const shouldBeCoverRatio = (type: ItemType) => ['book', 'movie'].includes(type)

export default ({ className, item }: CoverImageProps) => {
    if (item.imageUrl) {
        return (
            <div
                className={classNames(className, 'relative', {
                    'pb-3/2': shouldBeCoverRatio(item.type),
                    'pb-full': !shouldBeCoverRatio(item.type),
                })}
            >
                <img
                    className={classNames(
                        className,
                        'absolute border border-gray-100 h-full w-full',
                        {
                            'rounded-lg': item.type !== 'people',
                            'rounded-full': item.type === 'people',
                            'object-fill': shouldBeCoverRatio(item.type),
                            'object-cover': !shouldBeCoverRatio(item.type),
                        }
                    )}
                    src={item.imageUrl}
                />
            </div>
        )
    } else {
        const PlaceholderIcon = PictogramItems[item.type]
        return (
            <div className="relative pb-full ">
                <div
                    className={classNames(
                        className,
                        'absolute rounded border-gray-200 h-full w-full flex justify-center items-center',
                        {
                            'bg-purple-600': item.type === 'people',
                            'bg-blue-600': item.type === 'book',
                            'bg-orange-600': item.type === 'album',
                            'bg-green-500': item.type === 'podcast',
                            'bg-teal-600': ![
                                'podcast',
                                'album',
                                'people',
                                'book',
                            ].includes(item.type),
                        }
                    )}
                >
                    <PlaceholderIcon className="text-white fill-current h-16 w-16" />
                </div>
            </div>
        )
    }
}
