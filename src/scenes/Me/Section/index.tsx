import * as React from 'react'
import { useGetSectionQuery } from '../../../generated/types'
import HeaderForm from './HeaderForm'
import Options from './Options'
import NewCollectionBtn from './NewCollectionBtn'
import CollectionCard from './CollectionCard'
import EmptyBox from '../../../../public/pictograms/empty-box.svg'
import Loading from '../../UtilsPage/Loading'

interface SectionPageProps {
    sectionId: string
    authUserId: string
}

export default ({ sectionId, authUserId }: SectionPageProps) => {
    const { data, loading } = useGetSectionQuery({
        variables: { sectionId },
    })
    if (data === undefined || data.section === undefined || loading) {
        return <Loading />
    }
    const { section } = data
    const collections = section.collections.filter(x => !x.isDeleted)
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <HeaderForm
                    className="w-full"
                    sectionId={section.id}
                    title={section.title}
                />
                <div className="flex flex-row items-center">
                    <NewCollectionBtn
                        sectionId={section.id}
                        authUserId={authUserId}
                    />
                    <Options
                        className="ml-4"
                        collectionCount={
                            section.collections.filter(x => !x.isDeleted).length
                        }
                        sectionId={section.id}
                    />
                </div>
            </div>
            <div className="pt-16">
                {collections.length !== 0 ? (
                    collections.map(collection => {
                        return (
                            <CollectionCard
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
                            <EmptyBox className="fill-current h-20 w-20 text-gray-400" />
                            <span className="text-gray-600 mt-4">
                                Let's create your first collection
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
