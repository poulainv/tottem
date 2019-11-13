const domain =
    process.env.ENV === 'production'
        ? 'https://tottem.app'
        : 'http://localhost:3000'

export const AUTH_CONFIG = {
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENTID,
    audience: process.env.AUTH0_AUDIENCE,
    callbackUrl: domain + '/auth/callback',
}
