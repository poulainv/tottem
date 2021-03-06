import jwt, { Algorithm } from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'
import logger from '../logging'

const client = jwksClient({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
})

function getKey(header: any, cb: any) {
    client.getSigningKey(header.kid, (err: any, key: any) => {
        let signingKey
        try {
            signingKey = key.publicKey || key.rsaPublicKey
        } catch {
            logger.error(
                `Something went wrong when getting signingKey err: ${err} header: ${header} key:${key}`
            )
        } finally {
            cb(null, signingKey)
        }
    })
}

const options = {
    audience: process.env.AUTH0_AUDIENCE,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256' as Algorithm],
}

interface DecodedAccessToken {
    sub: string
    permissions: string[]
    'https://tottem.app/user_authorization': { roles: string[] }
}

export interface AuthenticatedUser {
    auth0Id: string // auth0 userId
    permissions: string[]
    roles: string[]
}

const getAuthUser: (
    accessToken: DecodedAccessToken
) => AuthenticatedUser = accessToken => {
    return {
        auth0Id: accessToken.sub,
        permissions: accessToken.permissions,
        roles: accessToken['https://tottem.app/user_authorization'].roles,
    }
}

const localUser: AuthenticatedUser = {
    auth0Id: process.env.AUTH0_LOCAL_ID || 'auth0|local|TBD',
    permissions: [],
    roles: ['admin'],
}

export const verifyIdentity: (
    token?: string
) => Promise<AuthenticatedUser> = async (token?: string) => {
    if (token === undefined) {
        return Promise.reject()
    }
    return new Promise((resolve, reject) => {
        try {
            if (process.env.NODE_ENV !== 'production') {
                return resolve(localUser)
            }
            jwt.verify(
                token,
                getKey,
                options,
                (err, decoded: string | object) => {
                    if (err) {
                        logger.error(err)
                        return reject(
                            `Authorization headers not decoded ${err}`
                        )
                    } else if (typeof decoded === 'string') {
                        logger.error(decoded)
                        return reject(
                            `Authorization headers decoded as string ${decoded}`
                        )
                    }
                    const userAuth = getAuthUser(decoded as DecodedAccessToken)
                    logger.info(`User authenticated: ${userAuth.auth0Id}`)
                    resolve(userAuth)
                }
            )
        } catch (err) {
            reject(err)
        }
    })
}
