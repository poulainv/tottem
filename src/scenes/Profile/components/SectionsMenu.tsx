import * as React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

export interface SectionsMenuProps {
    className?: string
    profileSlug: string
    activeSectionId: string
    sections: Array<{ slug: string; name?: string; index: number; id: string }>
}

export default ({
    className,
    sections,
    activeSectionId,
    profileSlug,
}: SectionsMenuProps) => {
    return (
        <div className={classNames(className)}>
            <ul className="flex w-full border-b border-gray-400 overflow-x-auto">
                {sections
                    ?.sort((a, b) => a.index - b.index)
                    .map((section, index) => {
                        return (
                            <li
                                key={index}
                                className={classNames(
                                    'text-gray-700 whitespace-no-wrap text-xs tracking-wide font-medium uppercase transition-all duration-200 border-b-2 border-transparent hover:text-teal-800 hover:border-teal-800 cursor-pointer',
                                    {
                                        'text-teal-800 border-teal-800':
                                            section.id === activeSectionId,
                                    }
                                )}
                            >
                                <Link
                                    href="/[profile]/[sectionSlug]"
                                    as={`/${profileSlug}/${section.slug}`}
                                >
                                    <a className="px-4 py-2 inline-block">
                                        {section.name || 'New Space'}
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
