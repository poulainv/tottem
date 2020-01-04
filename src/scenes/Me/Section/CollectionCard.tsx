import * as React from 'react'
import classNames from 'classnames'
import { Collection, Item } from '../../../generated/types'
import Options from '../Collection/HeaderForm/Options'
import { PictogramItems } from '../../../components/PictogramItems'
import Link from 'next/link'

export interface CollectionCardProps {
    className?: string
    avatar: string
    collection: Pick<Collection, 'id' | 'slug' | 'isDeleted' | 'updatedAt'> & {
        title: Collection['name']
    } & {
        items: Array<Pick<Item, 'imageUrl' | 'title' | 'type'>>
    }
}

export default ({ className, avatar, collection }: CollectionCardProps) => {
    const updatedAt = new Date(collection.updatedAt).toLocaleDateString(
        'fr-FR',
        {
            year: 'numeric',
            day: 'numeric',
            month: 'short',
        }
    )
    return (
        <div
            className={classNames(
                className,
                'w-full rounded shadow px-6 py-4 flex flex-col'
            )}
        >
            <div className="flex flex-row justify-between">
                <Link href="/me/c/[collectionId]" as={`/me/c/${collection.id}`}>
                    <a className="text-gray-900 font-semibold hover:text-black">
                        {collection.title}
                    </a>
                </Link>
                <Options
                    collectionId={collection.id}
                    className="text-gray-400 rotate-90deg"
                />
            </div>
            <div className="flex flex-row mt-2 items-center">
                <img
                    className="rounded-full h-6 w-6 border border-gray-200"
                    src={avatar}
                />
                <span className="ml-2 text-gray-500 text-sm leading-none tracking-tight">
                    {updatedAt}
                </span>
            </div>
            <div className="flex flex-row mt-6">
                {collection.items.map((item, index) => {
                    const PlaceholderIcon = PictogramItems[item.type]
                    return (
                        <div
                            key={index}
                            className="ml-24 first:ml-0 flex flex-col w-2/12 flex-shrink-0 flex-grow-0"
                        >
                            {item.imageUrl ? (
                                <img
                                    className="rounded-lg border border-gray-200"
                                    src={item.imageUrl}
                                />
                            ) : (
                                <div className="rounded w-40 border-gray-200 bg-gray-200 h-48 flex justify-center items-center">
                                    <PlaceholderIcon className="h-16 w-16 text-white fill-current" />
                                </div>
                            )}
                            <div className="text-gray-600 truncate mt-2 text-sm">
                                {item.title}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
