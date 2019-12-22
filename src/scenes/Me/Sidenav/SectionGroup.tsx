import SpaceIcon from '../../../../public/pictograms/space.svg'
import ArrowIcon from './arrow.svg'
import { useUpdateSectionExpandedMutation } from '../../../generated/types'
import Link from 'next/link'
import { MouseEvent } from 'react'
import classNames from 'classnames'

interface SectionGroupProps {
    title: string
    id: string
    currentHref: string
    isExpanded: boolean
    isActive: boolean
    collections: Array<{ title: string; id: string; isDeleted: boolean }>
}

export default ({
    title,
    id,
    isExpanded,
    currentHref,
    collections,
}: SectionGroupProps) => {
    const bgBrand200 = `bg-brand-100`

    const [setExpanded] = useUpdateSectionExpandedMutation()

    const handleExpand = (e: MouseEvent) => {
        setExpanded({
            variables: { isExpanded: !isExpanded, sectionId: id },
            optimisticResponse: {
                updateOneSection: {
                    id,
                    isExpanded: !isExpanded,
                    __typename: 'Section',
                },
            },
        })
        e.preventDefault()
    }
    const sectionHref = `/me/s/${id}`
    return (
        <div>
            <Link href="/me/s/[sectionId]" as={sectionHref}>
                <a
                    className={classNames(
                        `flex justify-between items-center pl-2 py-1 mb-1 rounded hover:${bgBrand200} cursor-pointer font-semibold`,
                        { bgBrand200: currentHref === sectionHref }
                    )}
                >
                    <div className="flex flex-row items-center">
                        <span className="mr-1">
                            <SpaceIcon
                                style={{ color: '#BFBFBF' }}
                                className="inline fill-current"
                                height={14}
                                width={14}
                            />
                        </span>
                        <span className="text-gray-800">
                            {title === null ? 'New Space' : title}
                        </span>
                    </div>
                    <div
                        onClick={handleExpand}
                        className="px-2 text-gray-600 hover:text-gray-800"
                    >
                        <ArrowIcon
                            width={16}
                            height={16}
                            className={`inline transition-all ${
                                isExpanded ? 'rotate-90deg' : 'rotate-0deg'
                            }`}
                        />
                    </div>
                </a>
            </Link>

            {isExpanded &&
                collections
                    .filter(x => !x.isDeleted)
                    .map(collection => {
                        const collectionHref = `/me/c/${collection.id}`
                        return (
                            <Link
                                key={collection.id}
                                href="/me/c/[collectionId]"
                                as={collectionHref}
                            >
                                <a
                                    className={`block px-6 py-1 rounded hover:${bgBrand200} cursor-pointer whitespace-no-wrap truncate mb-1 font-normal ${currentHref ===
                                        collectionHref && bgBrand200}`}
                                >
                                    {collection.title}
                                </a>
                            </Link>
                        )
                    })}
        </div>
    )
}
