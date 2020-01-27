import classNames from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import EmptyBox from '../../../../public/pictograms/empty-box.svg'
import CoverImage from '../../../components/CoverImage'
import { Collection, Item } from '../../../generated/types'
import Options from '../Collection/HeaderForm/Options'

export interface CollectionCardProps {
    className?: string
    avatar: string
    collection: Pick<Collection, 'id' | 'isDeleted' | 'updatedAt'> & {
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
            >
        >
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
        <Link href="/me/c/[collectionId]" as={`/me/c/${collection.id}`}>
            <a
                className={classNames(
                    className,
                    'w-full rounded shadow hover:shadow-md transition-all border border-gray-100 hover:border-gray-300 px-6 py-4 flex flex-col'
                )}
            >
                <div className="flex flex-row justify-between">
                    <p
                        data-cy="preview-collection-title"
                        className="text-gray-900 font-semibold hover:text-black"
                    >
                        {collection.title || 'New Collection'}
                    </p>
                    <Options
                        collectionId={collection.id}
                        className="text-gray-400 transform rotate-90"
                    />
                </div>
                <div className="flex flex-row items-center">
                    <img
                        className="rounded-full h-6 w-6 border border-gray-200"
                        src={avatar}
                    />
                    <span className="ml-2 text-gray-500 text-sm leading-none tracking-tight">
                        {updatedAt}
                    </span>
                </div>
                <div className="flex flex-row mt-4">
                    {collection.items.length !== 0 ? (
                        collection.items
                            .filter(x => !x.isDeleted)
                            .sort(
                                (a, b) =>
                                    new Date(b.createdAt).getTime() -
                                    new Date(a.createdAt).getTime()
                            )
                            .sort((a, b) => a.position - b.position)
                            .slice(0, 5)
                            .map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="ml-6 xl:ml-8 first:ml-0 flex flex-col w-1/6 flex-shrink-0 flex-grow-0"
                                    >
                                        <CoverImage item={item} />
                                        <div className="text-gray-600 truncate mt-2 text-xs">
                                            {item.title}
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
