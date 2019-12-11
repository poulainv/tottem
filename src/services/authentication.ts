import { useEffect, useState } from 'react'
import { useGetUserByAuthIdQuery, UserBasicFragment } from '../generated/types'
import Auth from './lib/auth0'

// Making the Auth0 methods available anywhere
const auth0 = new Auth()

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

const getAuthUser: () => AuthenticatedUser | undefined = () => {
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
        return authenticatedUser
    } else {
        auth0.login() // FIXME try this
    }
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

const useUserProfile: () => UserBasicFragment | undefined = () => {
    const authUser = useAuthUser()
    const { data, loading, error } = useGetUserByAuthIdQuery({
        variables: { authId: authUser ? authUser.id : 'foo' },
    })
    return data && data.user
}

export { useLoggedIn, useAuthUser, useUserProfile, auth0, getAuthUser }
