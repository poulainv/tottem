import * as React from 'react'
import SpaceIcon from '../../../../public/pictograms/space.svg'
import classNames from 'classnames'
import { useGetSectionQuery } from '../../../generated/types'
import HeaderForm from './HeaderForm'
import Item from 'antd/lib/list/Item'

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
        <div className="flex flex-row">
            <HeaderForm sectionId={section.id} title={section.title} />
        </div>
    )
}
