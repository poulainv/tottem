import * as React from 'react'
import classNames from 'classnames'
import { Item } from '../../../../generated/types'
import { PictogramItems } from '../../../../components/PictogramItems'
import CoverImage from '../../../../components/CoverImage'
import { ItemMetas } from '../../../../components/ItemMetas'

export interface ItemCardProps {
    className?: string
    item: Pick<
        Item,
        | 'id'
        | 'type'
        | 'productUrl'
        | 'title'
        | 'comment'
        | 'author'
        | 'description'
        | 'provider'
        | 'meta'
    >
}

export default ({ className, item }: ItemCardProps) => {
    const Pictogram = PictogramItems[item.type]
    return (
        <div
            className={classNames(
                className,
                'shadow rounded-sm flex flex-row flex-shrink-0 w-full min-h-9'
            )}
        >
            <div className="shadow rounded-sm flex flex-row w-full min-h-9">
                <div
                    className={classNames(
                        'bg-gray-100 p-4 flex flex-col flex-shrink',
                        {
                            'w-full': !item.comment?.length,
                            'w-1/2': item.comment?.length,
                        }
                    )}
                >
                    <div className="flex flex-row items-start">
                        <a
                            href={item.productUrl}
                            className="w-20 xl:w-24 flex-shrink-0"
                            target="_blank"
                        >
                            <CoverImage item={item} />
                        </a>
                        <div className="flex flex-col py-1 mx-4 min-w-0">
                            <div className="flex flex-row items-center">
                                <div className="text-gray-700">
                                    <Pictogram
                                        className="fill-current"
                                        height={14}
                                        width={14}
                                    />
                                </div>
                                <a
                                    href={item.productUrl}
                                    target="_blank"
                                    className="font-medium text-sm text-gray-900 px-2 truncate"
                                >
                                    {item.title}
                                </a>
                            </div>
                            <div className="text-gray-700 text-sm leading-none truncate mt-3">
                                {item.author}
                            </div>
                            <ItemMetas
                                className="text-gray-600 mt-4"
                                item={item}
                            />
                        </div>
                    </div>
                    {item.description && (
                        <div className="mt-4 text-gray-900 truncate">
                            {item.description}
                        </div>
                    )}
                </div>
                {item.comment && (
                    <div className="w-1/2 min-h-full flex-shrink-0">
                        <p className="p-4 text-sm whitespace-pre-line resize-none w-full min-h-full outline-none focus:shadow-outline text-gray-900">
                            {item.comment}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
