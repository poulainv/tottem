const domain =
    process.env.ENV === 'dev' ? 'http://localhost:3000' : 'https://tottem.app'
export const AUTH_CONFIG = {
    domain: 'dev-cajmwjmi.eu.auth0.com',
    clientId: 'tHd8WdWpAXY7B7oZ1M2MFBDpbIVza8yc',
    callbackUrl: domain + '/auth/callback',
}
