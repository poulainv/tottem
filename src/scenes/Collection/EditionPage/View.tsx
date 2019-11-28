import * as React from 'react'
import { Layout, PageBox } from '../../../components/Layout'
import { Collection, CollectionBasicFragment } from '../../../generated/types'
import CollectionForm from './HeaderForm'
import ItemForm from './ItemForm'
import ItemList from './ItemList'
import Status from './Status'
import { BackButton } from '../../../components/BackButton'
import Link from 'next/link'
import { LinkPrevious } from 'grommet-icons'
import { useRouter } from 'next/router'

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
    const router = useRouter()
    return (
        <Layout>
            <PageBox style={{ marginTop: '24px' }}>
                <BackButton onClick={router.back}>
                    <LinkPrevious
                        color="#595959"
                        style={{ margin: 'auto', display: 'block' }}
                    />
                </BackButton>
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
