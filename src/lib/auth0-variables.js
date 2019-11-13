const domain =
    process.env.NODE_ENV === 'production'
        ? 'https://quiet-vincentpoulain.quiet.now.sh/' // FIXME
        : 'http://localhost:3000'

export const AUTH_CONFIG = {
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENTID,
    audience: process.env.AUTH0_AUDIENCE,
    callbackUrl: domain + '/auth/callback',
}
