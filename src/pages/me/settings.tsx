import dynamic from 'next/dynamic'
import * as React from 'react'
import '../../index.css'
import { withApollo } from '../../services/lib/apollo'

const SettingsNoSSR = dynamic(() => import('../../scenes/Me/Settings'), {
    ssr: false,
})

export default withApollo(
    () => {
        return <SettingsNoSSR />
    },
    {
        ssr: false,
    }
)
