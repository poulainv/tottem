import React, { useEffect } from 'react'
import { Auth0 } from '../_document'
import LoadingPage from '../../components/organisms/LoadingPage'

const Callback: React.FunctionComponent = props => {
    useEffect(() => {
        Auth0.handleAuthentication().then(res => {
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
