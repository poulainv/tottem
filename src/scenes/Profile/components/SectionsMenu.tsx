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
            <ul className="flex w-full border-b border-gray-300 ">
                {sections.map((section, index) => {
                    return (
                        <li
                            key={index}
                            className={classNames(
                                'px-4 py-2 text-gray-700 transition-all duration-200 border-b-2 border-transparent hover:text-brand-800 hover:border-brand-800 cursor-pointer',
                                {
                                    'text-brand-800 border-brand-800':
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
