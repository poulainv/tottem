import { ISectionIndex, ISection } from './types'
import { getAwesomeSections } from './awesome/sections'

export const getSectionIndexes: (
    sections: ISection[]
) => ISectionIndex[] = sections => {
    return sections.map((section: ISection) => {
        return {
            id: section.id,
            index: section.index,
            name: section.name,
        }
    })
}

export const getSections: (profileName: string) => ISection[] = name => {
    if (name.includes('awesome')) {
        return getAwesomeSections(name)
    } else {
        return require(`./${name}/sections`).default
    }
}
