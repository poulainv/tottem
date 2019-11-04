import { useEffect } from 'react'
import { Auth0 } from '../_document'

const Login = () => {
    useEffect(() => {
        localStorage.setItem('redirectTo', document.referrer)
        Auth0.login()
    }, [])

    return ''
}

export default Login
