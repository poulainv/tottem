import * as React from 'react'
import Spinner from '../atoms/Spinner'
import { Layout, PageBox } from '../templates/Layout'

const LoadingPage = () => {
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

export default LoadingPage
