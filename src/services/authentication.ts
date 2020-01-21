import jwtDecode from 'jwt-decode'
import Auth from './lib/auth0'
import Router from 'next/router'

// Making the Auth0 methods available anywhere
const auth0 = new Auth()

export interface HttpsTottemAppUserAuthorization {
    roles: string[]
}

export interface Auth0UserDetails {
    'https://tottem.app/user_authorization': HttpsTottemAppUserAuthorization
    given_name?: string
    nickname: string
    name: string
    picture: string
    updated_at: Date
    email: string
    email_verified: boolean
    iss: string
    sub: string
    aud: string
    iat: number
    exp: number
    at_hash: string
    nonce: string
}

export interface AuthenticatedUser {
    id: string
    picture: string
    email: string
    name: string
    roles: string[]
}

const getAccessToken = (isServer: boolean, cookie?: string) => {
    if (isServer && cookie === undefined) {
        return undefined
    } else if (isServer) {
        return cookie
            ?.split(';')
            .find((c: string) => c.trim().startsWith('access_token='))
            ?.split('=')[1]
    } else {
        return localStorage.getItem('access_token')
    }
}

const getUserAuth = (isServer: boolean, cookie?: string) => {
    if (isServer && cookie === undefined) {
        return undefined
    } else if (isServer) {
        const idToken = cookie // FIXME should be a better way
            ?.split(';')
            .find((c: string) => c.trim().startsWith('id_token='))
            ?.split('=')[1]
        const userDetails: Auth0UserDetails | undefined =
            idToken !== undefined ? jwtDecode(idToken) : undefined
        return userDetails && getAuthUser(userDetails)
    } else {
        const userString = localStorage.getItem('user_details')
        const userDetails: Auth0UserDetails | null =
            userString && JSON.parse(userString)
        return userDetails ? getAuthUser(userDetails) : undefined
    }
}

const getAuthUser: (
    parsed: Auth0UserDetails
) => AuthenticatedUser | undefined = parsed => {
    const authenticatedUser = {
        picture: parsed.picture,
        email: parsed.email,
        name: parsed.nickname || parsed.email,
        roles: parsed['https://tottem.app/user_authorization'].roles,
        id: parsed.sub,
    }
    return authenticatedUser
}

export const onLogout = () => {
    auth0.logout()
    Router.push('/')
}

export { auth0, getAccessToken, getUserAuth }
