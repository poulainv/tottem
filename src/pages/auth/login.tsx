import { useEffect } from 'react'
import { auth0 } from '../../services/authentication'
import { NextPage } from 'next'
import LoadingPage from '../../scenes/UtilsPage/Loading'

const Login: NextPage = () => {
    useEffect(() => {
        const urlSearch = new URLSearchParams(window.location.search)
        const relativePath: string | null = urlSearch.get('redirect')
        const redirect = relativePath
            ? `${window.location.origin}/${relativePath}`
            : document.referrer

        localStorage.setItem('redirectTo', redirect)
        auth0.login()
    }, [])
    return <LoadingPage />
}

export default Login
