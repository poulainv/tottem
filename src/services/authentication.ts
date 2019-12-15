import jwtDecode from 'jwt-decode'
import Auth from './lib/auth0'

// Making the Auth0 methods available anywhere
const auth0 = new Auth()

export interface HttpsTottemAppUserAuthorization {
    roles: string[]
}

export interface Auth0UserDetails {
    'https://tottem.app/user_authorization': HttpsTottemAppUserAuthorization
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
        const idToken = cookie // FIXME mayme a better way
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

// const getTokenForBrowser = () => {
//     const accessToken: string | null = localStorage.getItem('access_token')
//     const userString = localStorage.getItem('user_details')
//     const userDetails: Auth0UserDetails | null =
//         userString && JSON.parse(userString)
//     return { accessToken, userDetails }
// }

// const getTokenForServer = (cookie: string) => {
//     const cookies = cookie.split(';')
//     const idToken = cookies // FIXME mayme a better way
//         .find((c: string) => c.trim().startsWith('id_token='))
//         ?.split('=')[1]
//     const accessToken = cookies
//         .find((c: string) => c.trim().startsWith('access_token='))
//         ?.split('=')[1]

//     const userDetails: Auth0UserDetails | undefined =
//         idToken !== undefined ? jwtDecode(idToken) : undefined

//     return {
//         accessToken,
//         userDetails,
//     }
// }

// const useLoggedIn = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
//     useEffect(() => {
//         const lsLoggedIn = Cookie.get('isLoggedIn')
//         if (lsLoggedIn) {
//             const parsed: boolean = JSON.parse(lsLoggedIn)
//             setIsLoggedIn(parsed)
//         }
//     }, [])
//     return isLoggedIn
// }

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

export { auth0, getAuthUser, getAccessToken, getUserAuth }
