import { ISection } from '../../types'

export const getAwesomeSections: (name: string) => ISection[] = name => {
    return require(`../${name}/generated-sections.json`)
}
