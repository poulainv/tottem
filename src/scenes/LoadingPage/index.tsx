import * as React from 'react'
import Spinner from '../../components/Spinner'
import { Layout, PageBox } from '../../components/Layout'

export default () => {
    return (
        <Layout>
            <PageBox
                style={{ minHeight: '80vh' }}
                align="center"
                justify="center"
            >
                <Spinner />
            </PageBox>
        </Layout>
    )
}
