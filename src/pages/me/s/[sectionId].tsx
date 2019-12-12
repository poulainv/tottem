import dynamic from 'next/dynamic'
import * as React from 'react'
import '../../../index.css'
import { withApollo } from '../../../services/lib/apollo'
import { useRouter } from 'next/router'

const SectionNoSSR = dynamic(() => import('../../../scenes/Me/Section'), {
    ssr: false,
})

export default withApollo(
    () => {
        const router = useRouter()
        return <SectionNoSSR sectionId={router.query.sectionId.toString()} />
    },
    {
        ssr: false,
    }
)
