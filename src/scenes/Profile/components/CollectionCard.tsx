import classNames from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import EmptyBox from '../../../../public/pictograms/empty-box.svg'
import CoverImage from '../../../components/CoverImage'
import { Collection, Item } from '../../../generated/types'
import { PictogramItems } from '../../../components/PictogramItems'

export interface CollectionCardProps {
    className?: string
    avatar: string
    profileSlug: string
    collection: Pick<Collection, 'id' | 'slug' | 'isDeleted' | 'updatedAt'> & {
        title: Collection['name']
    } & {
        items: Array<
            Pick<
                Item,
                | 'imageUrl'
                | 'title'
                | 'type'
                | 'isDeleted'
                | 'createdAt'
                | 'position'
                | 'author'
            >
        >
    }
}

export default ({
    className,
    avatar,
    collection,
    profileSlug,
}: CollectionCardProps) => {
    const updatedAt = new Date(collection.updatedAt).toLocaleDateString(
        'fr-FR',
        {
            year: 'numeric',
            day: 'numeric',
            month: 'short',
        }
    )
    return (
        <Link
            href="/[profile]/c/[collectionSlug]"
            as={`/${profileSlug}/c/${collection.slug}`}
        >
            <a
                className={classNames(
                    className,
                    'w-full py-4 flex flex-col bg-white p-6 shadow-md'
                )}
            >
                <div className="flex flex-row justify-between">
                    <p className="text-gray-900 font-medium hover:text-black">
                        {collection.title || 'New Collection'}
                    </p>
                    <p className="text-teal-700 text-sm font-medium uppercase hover:text-teal-900">
                        More
                    </p>
                </div>
                <div className="flex flex-row items-center mt-3">
                    <img
                        className="rounded-full h-6 w-6 border border-gray-200"
                        src={avatar}
                    />
                    <span className="ml-2 text-gray-500 text-sm leading-none tracking-tight">
                        {updatedAt}
                    </span>
                </div>
                <div className="flex mt-3 whitespace-no-wrap overflow-x-auto">
                    {collection.items.length !== 0 ? (
                        collection.items
                            .filter(x => !x.isDeleted)
                            .sort(
                                (a, b) =>
                                    new Date(b.createdAt).getTime() -
                                    new Date(a.createdAt).getTime()
                            )
                            .sort((a, b) => a.position - b.position)
                            .slice(0, 4)
                            .map((item, index) => {
                                const Picto = PictogramItems[item.type]
                                return (
                                    <div
                                        key={index}
                                        className="ml-6 xl:ml-6 first:ml-0 flex flex-col w-48 min-w-0 flex-shrink-0 flex-grow-0 rounded-lg py-4"
                                    >
                                        <div className="w-4/5 mx-auto">
                                            <CoverImage item={item} />
                                        </div>
                                        <div className="px-4 mt-3">
                                            <p className="text-sm truncate text-gray-700 font-medium">
                                                {item.title}
                                            </p>
                                            <div className="flex items-center mt-2">
                                                <Picto className="h-4 text-gray-600 fill-current flex-shrink-0" />
                                                <p className="ml-2 text-xs font-medium uppercase text-gray-500 truncate tracking-tight">
                                                    {item.author}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    ) : (
                        <div className="mx-auto mt-6 mb-8">
                            <EmptyBox className="fill-current h-20 w-20 text-gray-400" />
                        </div>
                    )}
                </div>
            </a>
        </Link>
    )
}
