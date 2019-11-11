import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { Menu, MenuItem } from './Menu'
import { ISection } from '../fragments/profile'

export interface ISectionMenuProps {
    sections: ISection[]
    activeSectionId: string
}

export function SectionMenu(props: ISectionMenuProps) {
    const router = useRouter()
    const sortedSections: ISection[] = props.sections.sort(
        (a: ISection, b: ISection) => a.index - b.index
    )
    return (
        <Menu>
            {sortedSections.map(section => {
                return (
                    <Link
                        key={section.slug}
                        href="/[profile]/[sectionId]"
                        as={`/${router.query.profile}/${section.slug}`}
                        passHref
                    >
                        <MenuItem
                            active={section.slug === props.activeSectionId}
                        >
                            <a
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'inherit',
                                }}
                            >
                                {section.name}
                            </a>
                        </MenuItem>
                    </Link>
                )
            })}
        </Menu>
    )
}
