import * as React from 'react'
import LoadingPage from '../../LoadingPage'
import View from '../../Me/Collection/View'
import { useGetCollectionIdQuery } from '../../../generated/types'

export default ({
    initialCollectionId,
    profile,
    sectionId,
}: {
    initialCollectionId?: string
    profile?: string
    sectionId?: string
}) => {
    const [collectionId, setCollectionId] = React.useState<string>()

    if (initialCollectionId !== undefined) {
        const { error, data } = useGetCollectionIdQuery({
            variables: {
                collectionId: initialCollectionId,
            },
            // pollInterval: 5000,
        })

        if (
            data === undefined ||
            data.collection === undefined ||
            data.collection === null
        ) {
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
