import * as React from 'react'
import classNames from 'classnames'
import CollectionCard from './CollectionCard'
import { useGetSectionQuery } from '../../../generated/types'

export interface CollectionListProps {
    className?: string
    sectionId: string
    profileSlug: string
}

export default ({ className, sectionId, profileSlug }: CollectionListProps) => {
    const { error, data: section } = useGetSectionQuery({
        variables: {
            sectionId,
        },
    })

    return (
        <div className={classNames(className)}>
            {section?.section !== undefined ? (
                section?.section.collections.map(collection => {
                    return (
                        <CollectionCard
                            profileSlug={profileSlug}
                            collection={collection}
                            avatar={collection.owner.pictureUrl}
                            key={collection.id}
                            className="mt-8 first:mt-0"
                        />
                    )
                })
            ) : (
                <div className="w-full mt-40 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                        <span className="text-gray-600 mt-4">
                            Let's your create first collection
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}
