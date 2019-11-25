import * as React from 'react'
import { Layout, PageBox } from '../../../components/Layout'
import { Collection, CollectionBasicFragment } from '../../../generated/types'
import CollectionForm from './HeaderForm'
import ItemForm from './ItemForm'
import ItemList from './ItemList'
import Status from './Status'

const View = ({
    onSaved,
    collectionId,
    initialCollection,
    sectionId,
    profile,
}: {
    onSaved?: (collectionId: string) => void
    initialCollection?: CollectionBasicFragment
    sectionId?: string
    profile?: string
    collectionId?: string
}) => {
    return (
        <Layout>
            <PageBox style={{ marginTop: '24px' }}>
                <Status onSaved={onSaved}>
                    {(
                        onSavedF: (collectionId: string) => void,
                        onChange: () => void,
                        onSaving: () => void
                    ) => (
                        <CollectionForm
                            onSaving={onSaving}
                            onChange={onChange}
                            onSaved={onSavedF}
                            initialCollection={initialCollection}
                            profile={profile}
                            sectionId={sectionId}
                        />
                    )}
                </Status>
                <ItemForm collectionId={collectionId} />
                <ItemList collectionId={collectionId} />
            </PageBox>
        </Layout>
    )
}

export default View
