import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { ISectionIndex } from '../types'
import { Menu, MenuItem } from './Menu'

export interface ISectionMenuProps {
    sections: ISectionIndex[]
    activeSectionId: string
}

export function SectionMenu(props: ISectionMenuProps) {
    const router = useRouter()
    const sortedSections = props.sections.sort((a, b) => a.index - b.index)
    return (
        <Menu>
            {sortedSections.map(section => {
                return (
                    <MenuItem
                        key={section.id}
                        active={section.id === props.activeSectionId}
                    >
                        <Link
                            href="/[profile]/[sectionId]"
                            as={`/${router.query.profile}/${section.id}`}
                            passHref
                        >
                            <a
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'inherit',
                                }}
                            >
                                {section.name}
                            </a>
                        </Link>
                    </MenuItem>
                )
            })}
        </Menu>
    )
}
