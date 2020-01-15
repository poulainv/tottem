import * as React from 'react'
import Router from 'next/router'

export default ({ redirect = true }) => {
    React.useEffect(() => {
        if (redirect) {
            Router.push('/auth/login')
        }
    }, [])
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            User not authenticated.
        </div>
    )
}
