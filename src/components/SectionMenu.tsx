import * as React from 'react'
import { Menu, MenuItem } from './Menu'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface ISectionMenuProps {
    sections: Array<{ name: string; index: number; id: string }>
}

export function SectionMenu(props: ISectionMenuProps) {
    const router = useRouter()
    const sectionId = router.query.sectionId
    const activeSection = props.sections.find(x => x.id === sectionId)
    const activeIndex = activeSection !== undefined ? activeSection.index : 0
    const sortedSections = props.sections.sort((a, b) => a.index - b.index)
    return (
        <Menu>
            {sortedSections.map((section, index) => {
                return (
                    <MenuItem key={section.id} active={index === activeIndex}>
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
