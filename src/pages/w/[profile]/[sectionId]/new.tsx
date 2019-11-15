import { useRouter } from 'next/router'
import * as React from 'react'
import { withApollo } from '../../../../lib/apollo'
import CollectionEdition from '../../../../scenes/Collection/EditionPage'

// FIXME protect this route
export default withApollo(() => {
    const router = useRouter()
    return (
        <CollectionEdition
            profile={router.query.profile.toString()}
            sectionId={router.query.sectionId.toString()}
        />
    )
})
