import dynamic from 'next/dynamic'
import * as React from 'react'
import '../index.css'
import { withApollo } from '../services/lib/apollo'

const MePageNoSSR = dynamic(() => import('../scenes/Me'), {
    ssr: false,
})

export default withApollo(
    () => {
        return <MePageNoSSR />
    },
    {
        ssr: false,
    }
)
