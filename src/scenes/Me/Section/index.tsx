import * as React from 'react'
import { useGetSectionQuery } from '../../../generated/types'
import HeaderForm from './HeaderForm'
import Options from './Options'
import NewCollectionBtn from './NewCollectionBtn'

interface SectionPageProps {
    sectionId: string
}

export default ({ sectionId }: SectionPageProps) => {
    const { data, loading } = useGetSectionQuery({
        variables: { sectionId },
    })
    if (data === undefined || data.section === undefined) {
        return <div>Foo</div>
    }
    const { section } = data

    return (
        <div className="flex flex-row justify-between">
            <HeaderForm
                className="w-full"
                sectionId={section.id}
                title={section.title}
            />
            <div className="flex flex-row items-center">
                <NewCollectionBtn sectionId={section.id} />
                <Options
                    className="ml-4"
                    collectionCount={
                        section.collections.filter(x => !x.isDeleted).length
                    }
                    sectionId={section.id}
                />
            </div>
        </div>
    )
}
