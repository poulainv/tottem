import dynamic from 'next/dynamic'
import * as React from 'react'
import '../../../index.css'
import { withApollo } from '../../../services/lib/apollo'
import { useRouter } from 'next/router'

const CollectionNoSSR = dynamic(() => import('../../../scenes/Me/Collection'), {
    ssr: false,
})

export default withApollo(
    () => {
        const router = useRouter()
        return (
            <CollectionNoSSR
                collectionId={
                    router.query.collectionId &&
                    router.query.collectionId.toString()
                }
            />
        )
    },
    {
        ssr: false,
    }
)
