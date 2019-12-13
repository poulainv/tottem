import dynamic from 'next/dynamic'
import * as React from 'react'
import '../../index.css'
import { withApollo } from '../../services/lib/apollo'

const ArchivedNoSSR = dynamic(() => import('../../scenes/Me/Archived'), {
    ssr: false,
})

export default withApollo(
    () => {
        return <ArchivedNoSSR />
    },
    {
        ssr: false,
    }
)
