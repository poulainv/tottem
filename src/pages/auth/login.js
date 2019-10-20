import { useEffect } from 'react'
import Auth from '../../lib/Auth'
const auth = new Auth()

const Login = () => {
    useEffect(() => {
        auth.login()
    }, [])

    return ''
}

export default Login
