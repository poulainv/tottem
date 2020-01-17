import * as React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

export interface SectionsMenuProps {
    className?: string
    profileSlug: string
    activeSectionIndex: number
    sections: Array<{ slug: string; name?: string }>
}

export default ({
    className,
    sections,
    activeSectionIndex,
    profileSlug,
}: SectionsMenuProps) => {
    return (
        <div className={classNames(className)}>
            <ul className="flex w-full border-b border-gray-400 ">
                {sections.map((section, index) => {
                    return (
                        <li
                            key={index}
                            className={classNames(
                                'px-4 py-2 text-gray-700 text-xs tracking-wide font-medium uppercase transition-all duration-200 border-b-2 border-transparent hover:text-teal-800 hover:border-teal-800 cursor-pointer',
                                {
                                    'text-teal-800 border-teal-800':
                                        index === activeSectionIndex,
                                }
                            )}
                        >
                            <Link
                                href="/[profile]/[sectionSlug]"
                                as={`/${profileSlug}/${section.slug}`}
                            >
                                <a>{section.name || 'New Space'}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
