import SpaceIcon from '../../../../../public/pictograms/space.svg'
import PlusIcon from '../../../../../public/pictograms/plus.svg'
import ArrowIcon from './arrow.svg'
import { useUpdateSectionExpandedMutation } from '../../../../generated/types'
import Link from 'next/link'
import { MouseEvent, Fragment } from 'react'
import classNames from 'classnames'
import { useCreateEmptyCollection } from '../../Collection/hooks'

interface SectionGroupProps {
    title?: string
    id: string
    currentHref: string
    isExpanded: boolean
    collections: Array<{ title?: string; id: string; isDeleted: boolean }>
    authUserId: string
}

export default ({
    title,
    id,
    isExpanded,
    currentHref,
    collections,
    authUserId,
}: SectionGroupProps) => {
    const [createCollection] = useCreateEmptyCollection(id, authUserId)
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
        <Fragment>
            <Link href="/me/s/[sectionId]" as={sectionHref}>
                <a
                    className={classNames(
                        `flex group justify-between items-center pl-2 py-1 mb-1 rounded hover:bg-brand-100 cursor-pointer font-semibold`,
                        { 'bg-brand-100': currentHref === sectionHref }
                    )}
                >
                    <SpaceIcon
                        style={{ color: '#BFBFBF' }}
                        className="inline fill-current mr-1 flex-shrink-0"
                        height={14}
                        width={14}
                    />
                    <span
                        data-cy="nav-space"
                        className="block text-gray-800 truncate flex-shrink w-full"
                    >
                        {title === null || title === '' ? 'New Space' : title}
                    </span>
                    <div className="flex flex-row items-center flex-shrink-0">
                        <div
                            className="border border-gray-500 p-px invisible group-hover:visible rounded-sm hover:bg-brand-200 transition-all duration-100"
                            onClick={() => createCollection()}
                        >
                            <PlusIcon
                                width={10}
                                height={10}
                                className="fill-current text-gray-600 stroke-2 m-px"
                            />
                        </div>
                        <div
                            onClick={handleExpand}
                            className="px-2 text-gray-600 hover:text-gray-800"
                        >
                            <ArrowIcon
                                width={16}
                                height={16}
                                className={classNames(
                                    'inline transition-all transform duration-100 rounded-sm hover:bg-brand-200',
                                    {
                                        'rotate-90': isExpanded,
                                        'rotate-0': !isExpanded,
                                    }
                                )}
                            />
                        </div>
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
                                    data-cy="nav-collection"
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
        </Fragment>
    )
}
