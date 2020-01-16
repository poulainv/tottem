import { useEffect } from 'react'
import { Section, useGetProfileQuery } from '../../generated/types'
import LoadingPage from '../UtilsPage/Loading'
import CollectionList from './components/CollectionList'
import SectionsMenu from './components/SectionsMenu'
import { Seo } from './components/Seo'

export const getDefaultSection = (
    sections: Array<Pick<Section, 'id' | 'slug' | 'name' | 'index'>>
) => {
    const minimumIndex = Math.min(...sections.map(x => x.index))
    const defaultSection = sections.find(x => x.index === minimumIndex)
    if (defaultSection === undefined) {
        throw Error('No default section')
    }
    return defaultSection
}

export interface IProfilePageProps {
    authUserId?: string
    activeSectionId?: string
    profile: string
}

export default (props: IProfilePageProps) => {
    const { loading, data } = useGetProfileQuery({
        variables: {
            slug: props.profile,
        },
    })

    if (loading || !data?.user || !data?.sections) {
        return <LoadingPage />
    }

    // useEffect()

    const { user, sections } = data
    const activeSection =
        sections.find(x => x.id === props.activeSectionId) ||
        getDefaultSection(sections)

    return (
        <div className="flex flex-col">
            <Seo
                profileSlug={props.profile}
                firstname={user.firstname}
                biography={user.biography}
                avatar={user.pictureUrl}
                sectionSlug={activeSection.slug}
            />
            <div className="flex flex-col text-gray-900">
                <div className="flex flex-row">
                    <img
                        src={user.pictureUrl}
                        className="h-32 w-32 rounded-full border border-gray-200 object-cover"
                        alt=""
                    />
                    <div className="flex flex-col ml-6 justify-evenly">
                        <h1 className="text-2xl font-medium">
                            {user.firstname}
                        </h1>
                        <p className="leading-relaxed text-gray-700">
                            {user.biography}
                        </p>
                    </div>
                </div>
                <SectionsMenu
                    className="mt-6"
                    profileSlug={props.profile}
                    activeSectionIndex={activeSection.index}
                    sections={sections}
                />
                <CollectionList
                    className="mt-8"
                    profileSlug={props.profile}
                    sectionId={activeSection.id}
                />
            </div>
        </div>
    )
}
