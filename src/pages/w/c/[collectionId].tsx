import { useRouter } from 'next/router'
import * as React from 'react'
import { withApollo } from '../../../services/lib/apollo'
import CollectionEdition from '../../../scenes/Collection/EditionPage'

// FIXME protect this route
export default withApollo(() => {
    const router = useRouter()
    return (
        <CollectionEdition
            initialCollectionId={router.query.collectionId.toString()}
        />
    )
})
