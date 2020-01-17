import * as React from 'react'
import classNames from 'classnames'
import CollectionCard from './CollectionCard'
import { useGetSectionQuery } from '../../../generated/types'
import Loading from '../../UtilsPage/Loading'
import EmptyBox from '../../../../public/pictograms/empty-box.svg'

export interface CollectionListProps {
    className?: string
    sectionId: string
    profileSlug: string
}

export default ({ className, sectionId, profileSlug }: CollectionListProps) => {
    const { data, loading } = useGetSectionQuery({
        variables: {
            sectionId,
        },
    })

    if (loading) {
        return <Loading />
    }

    return (
        <div className={classNames(className)}>
            {data?.section?.collections.length !== 0 ? (
                data?.section?.collections
                    ?.sort(
                        (a, b) =>
                            new Date(b.updatedAt).getTime() -
                            new Date(a.updatedAt).getTime()
                    )
                    .map(collection => {
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
                <div className="w-full mt-48 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                        <EmptyBox className="fill-current h-20 w-20 text-gray-400" />
                        <span className="text-gray-600 mt-2">
                            No collections
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}
