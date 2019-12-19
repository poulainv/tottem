import * as React from 'react'
import SpaceIcon from '../../../public/pictograms/space.svg'

interface SectionPageProps {
    sectionId: string
}

export default ({ sectionId }: SectionPageProps) => {
    return (
        <div>
            <div className="flex flex-row items-center">
                <SpaceIcon height={24} width={24} />
                <h1 className="text-2xl ml-2 text-gray-900 leading-none">
                    Space
                </h1>
            </div>
        </div>
    )
}
