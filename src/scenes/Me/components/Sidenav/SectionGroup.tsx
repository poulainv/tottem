import SpaceIcon from '../../../../../public/pictograms/space.svg'
import ArrowIcon from './arrow.svg'
import { useUpdateSectionExpandedMutation } from '../../../../generated/types'
import Link from 'next/link'
import { MouseEvent } from 'react'
import classNames from 'classnames'

interface SectionGroupProps {
    title?: string
    id: string
    currentHref: string
    isExpanded: boolean
    isActive: boolean
    collections: Array<{ title?: string; id: string; isDeleted: boolean }>
}

export default ({
    title,
    id,
    isExpanded,
    currentHref,
    collections,
}: SectionGroupProps) => {
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
                        `flex justify-between items-center pl-2 py-1 mb-1 rounded hover:bg-brand-100 cursor-pointer font-semibold`,
                        { 'bg-brand-100': currentHref === sectionHref }
                    )}
                >
                    <div className="flex flex-row items-center">
                        <SpaceIcon
                            style={{ color: '#BFBFBF' }}
                            className="inline fill-current mr-1"
                            height={14}
                            width={14}
                        />
                        <span className="text-gray-800">
                            {title === null || title === ''
                                ? 'New Space'
                                : title}
                        </span>
                    </div>
                    <div
                        onClick={handleExpand}
                        className="px-2 text-gray-600 hover:text-gray-800"
                    >
                        <ArrowIcon
                            width={16}
                            height={16}
                            className={classNames(
                                'inline transition-all transform duration-100',
                                {
                                    'rotate-90': isExpanded,
                                    'rotate-0': !isExpanded,
                                }
                            )}
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
                                    className={classNames(
                                        `block px-6 py-1 rounded hover:bg-brand-100 cursor-pointer whitespace-no-wrap truncate mb-1 font-normal`,
                                        {
                                            'bg-brand-100':
                                                currentHref === collectionHref,
                                        }
                                    )}
                                >
                                    {collection.title === null ||
                                    collection.title === ''
                                        ? 'New Collection'
                                        : collection.title}
                                </a>
                            </Link>
                        )
                    })}
        </div>
    )
}
