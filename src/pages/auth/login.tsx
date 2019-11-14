import { useEffect } from 'react'
import { Auth0 } from '../_document'
import { NextPage } from 'next'
import LoadingPage from '../../components/organisms/LoadingPage'

const Login: NextPage = () => {
    useEffect(() => {
        const urlSearch = new URLSearchParams(window.location.search)

        const relativePath: string | null = urlSearch.get('redirect')
        const redirect = relativePath
            ? `${window.location.origin}/${relativePath}`
            : document.referrer

        localStorage.setItem('redirectTo', redirect)
        Auth0.login()
    }, [])
    return <LoadingPage />
}

export default Login
