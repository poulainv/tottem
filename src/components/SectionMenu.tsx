import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { ISection } from '../types'
import { Menu, MenuItem } from './Menu'
import { getDefaultSection } from './Views/Profile'

export interface ISectionMenuProps {
    sections: ISection[]
}

export function SectionMenu(props: ISectionMenuProps) {
    const router = useRouter()
    const sectionId =
        router.query.sectionId || getDefaultSection(props.sections).id
    const sortedSections = props.sections.sort((a, b) => a.index - b.index)
    return (
        <Menu>
            {sortedSections.map(section => {
                return (
                    <MenuItem
                        key={section.id}
                        active={section.id === sectionId}
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
