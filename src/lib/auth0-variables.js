const domain =
    process.env.ENV === 'dev' ? 'http://localhost:3000' : 'https://tottem.app'

export const AUTH_CONFIG = {
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENTID,
    callbackUrl: domain + '/auth/callback',
}
