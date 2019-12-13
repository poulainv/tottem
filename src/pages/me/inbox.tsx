import dynamic from 'next/dynamic'
import * as React from 'react'
import '../../index.css'
import { withApollo } from '../../services/lib/apollo'

const InboxNoSSR = dynamic(() => import('../../scenes/Me/Inbox'), {
    ssr: false,
})

export default withApollo(
    () => {
        return <InboxNoSSR />
    },
    {
        ssr: false,
    }
)
