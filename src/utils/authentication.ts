import { useEffect, useState } from 'react'

interface AuthenticatedUser {
    id: string
    picture: string
    email: string
    name: string
    roles: string[]
}

const useLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        const lsLoggedIn = localStorage.getItem('isLoggedIn')
        if (lsLoggedIn) {
            const parsed: boolean = JSON.parse(lsLoggedIn)
            setIsLoggedIn(parsed)
        }
    }, [])
    return isLoggedIn
}

const useAuthUser: () => AuthenticatedUser | undefined = () => {
    const [userData, setUserData] = useState()
    useEffect(() => {
        const lsUserDetails = localStorage.getItem('user_details')
        if (lsUserDetails) {
            const parsed = JSON.parse(lsUserDetails)
            const authenticatedUser = {
                picture: parsed.picture,
                email: parsed.email,
                name: parsed.given_name || parsed.nickname || parsed.email,
                roles: parsed['https://tottem.app/user_authorization'].roles,
                id: parsed.sub,
            }
            setUserData(authenticatedUser)
        }
    }, [])
    return userData
}

export { useLoggedIn, useAuthUser }
