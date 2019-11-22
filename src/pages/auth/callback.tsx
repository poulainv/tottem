import React, { useEffect } from 'react'
import { auth0 } from '../../services/authentication'
import LoadingPage from '../../scenes/LoadingPage'

const Callback: React.FunctionComponent = props => {
    useEffect(() => {
        auth0.handleAuthentication().then(res => {
            const redirectTo = localStorage.getItem('redirectTo')
            if (redirectTo) {
                // If user is logging in or out, we redirect him to the page he was on
                window.location.href = redirectTo
                localStorage.removeItem('redirectTo')
            } else {
                window.location.replace('/')
            }
        })
    }, [])
    return <LoadingPage />
}

export default Callback
