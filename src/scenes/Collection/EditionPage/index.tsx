import * as React from 'react'
import LoadingPage from '../../LoadingPage'
import { useCollection } from '../queries'
import View from './View'

export default ({
    initialCollectionId,
    profile,
    sectionId,
}: {
    initialCollectionId?: string
    profile?: string
    sectionId?: string
}) => {
    const [collectionId, setCollectionId] = React.useState()

    if (initialCollectionId !== undefined) {
        const { error, data } = useCollection(initialCollectionId)
        if (data === undefined || data.collection === undefined) {
            return <LoadingPage />
        }
        return (
            <View
                collectionId={initialCollectionId}
                initialCollection={data.collection}
            />
        )
    } else {
        const handleSaved = (id: string) => {
            setCollectionId(id)
            history.pushState('', '', `/w/c/${id}`)
        }
        return (
            <View
                collectionId={collectionId}
                profile={profile}
                sectionId={sectionId}
                onSaved={handleSaved}
            />
        )
    }
}
