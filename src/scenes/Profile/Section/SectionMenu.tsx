import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { Menu, MenuItem } from '../../../components/Menu'
import { Section } from '../../../generated/types'

export interface ISectionMenuProps {
    sections: Array<Pick<Section, 'id' | 'slug' | 'name' | 'index'>>
    activeSectionSlug: string
}

export function SectionMenu(props: ISectionMenuProps) {
    const router = useRouter()
    const sortedSections = props.sections.sort((a, b) => a.index - b.index)
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
                            active={section.slug === props.activeSectionSlug}
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
