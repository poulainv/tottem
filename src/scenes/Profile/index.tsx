import { useEffect } from 'react'
import { Section, useGetProfileQuery } from '../../generated/types'
import LoadingPage from '../UtilsPage/Loading'
import CollectionList from './components/CollectionList'
import SectionsMenu from './components/SectionsMenu'
import { Seo } from './components/Seo'
import NotFound from '../UtilsPage/NotFound'

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

    if (loading) {
        return <LoadingPage />
    } else if (!data?.user || !data?.sections) {
        return <NotFound />
    }

    const { user, sections } = data
    const activeSection =
        sections.find(x => x.id === props.activeSectionId) ||
        getDefaultSection(sections)

    return (
        <div className="bg-gray-100 border-t border-gray-200 min-h-screen">
            <div className="xl:w-full max-w-2xl xl:max-w-4xl mx-2 xl:mx-auto pb-16 flex flex-col">
                <Seo
                    profileSlug={props.profile}
                    firstname={user.firstname}
                    biography={user.biography}
                    avatar={user.pictureUrl}
                    sectionSlug={activeSection.slug}
                />
                <div className="flex flex-col text-gray-900 mt-10">
                    <div className="flex">
                        <img
                            src={user.pictureUrl}
                            className="hidden xl:block h-32 w-32 rounded-full border-8 border-white object-cover flex-shrink-0"
                            alt=""
                        />
                        <div className="flex flex-col ml-0 xl:ml-8 bg-white p-5 shadow w-full">
                            <h1 className="text-xl font-medium text-gray-900 leading-tight">
                                {user.firstname}
                            </h1>
                            <p className="text-gray-700 text-sm font-light mt-3 leading-relaxed whitespace-pre-line">
                                {user.biography}
                            </p>
                        </div>
                    </div>
                    <SectionsMenu
                        className="mt-6 w-full mt-8"
                        profileSlug={props.profile}
                        activeSectionId={activeSection.id}
                        sections={sections}
                    />
                    <CollectionList
                        className="mt-8"
                        profileSlug={props.profile}
                        sectionId={activeSection.id}
                    />
                </div>
            </div>
        </div>
    )
}
