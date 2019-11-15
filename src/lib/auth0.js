import auth0 from 'auth0-js'
import jwtDecode from 'jwt-decode'
import util from 'util'

const AUTH_CONFIG = {
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENTID,
    audience: process.env.AUTH0_AUDIENCE,
    callbackUrl: process.env.AUTH0_CALLBACK,
}

export default class Auth {
    accessToken
    idToken
    expiresAt

    auth0 = new auth0.WebAuth({
        domain: AUTH_CONFIG.domain,
        clientID: AUTH_CONFIG.clientId,
        redirectUri: AUTH_CONFIG.callbackUrl,
        responseType: 'token id_token',
        scope: 'openid profile email',
        audience: AUTH_CONFIG.audience,
    })

    constructor() {
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
        this.handleAuthentication = this.handleAuthentication.bind(this)
        this.isAuthenticated = this.isAuthenticated.bind(this)
        this.getAccessToken = this.getAccessToken.bind(this)
        this.getIdToken = this.getIdToken.bind(this)
        this.renewSession = this.renewSession.bind(this)
    }

    login() {
        this.auth0.authorize()
    }

    extractInfoFromHash = () => {
        if (process.server) {
            return
        }
        const { id_token } = this.getQueryParams()
        return {
            token: id_token,
            user_details: jwtDecode(id_token),
        }
    }

    getQueryParams = () => {
        const params = {}
        window.location.href.replace(
            /([^(?|#)=&]+)(=([^&]*))?/g,
            ($0, $1, $2, $3) => {
                params[$1] = $3
            }
        )
        return params
    }

    handleAuthentication() {
        return new Promise(resolve => {
            this.auth0.parseHash((err, authResult) => {
                console.log(
                    util.inspect(
                        authResult,
                        false,
                        null,
                        true /* enable colors */
                    )
                )
                var user_details = this.extractInfoFromHash()
                console.log(
                    util.inspect(
                        user_details,
                        false,
                        null,
                        true /* enable colors */
                    )
                )
                if (
                    authResult &&
                    authResult.accessToken &&
                    authResult.idToken
                ) {
                    this.setSession(authResult, user_details)
                    resolve(true)
                } else if (err) {
                    console.log(err)
                    alert(
                        `Error: ${err.error}. Check the console for further details.`
                    )
                    resolve(false)
                    window.location.replace('/')
                }
            })
        })
    }

    getAccessToken() {
        return this.accessToken
    }

    getIdToken() {
        return this.idToken
    }

    setSession(authResult, user_details) {
        // Set isLoggedIn flag in localStorage
        localStorage.setItem('isLoggedIn', 'true')
        if (user_details !== undefined) {
            localStorage.setItem(
                'user_details',
                JSON.stringify(user_details.user_details)
            )
        }
        localStorage.setItem('access_token', authResult.accessToken)

        // Set the time that the access token will expire at
        let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
        this.accessToken = authResult.accessToken
        this.idToken = authResult.idToken
        this.expiresAt = expiresAt

        // navigate to the home route
        //history.replace('/home');
    }

    renewSession() {
        return new Promise((resolve, reject) => {
            this.auth0.checkSession({}, (err, authResult) => {
                if (
                    authResult &&
                    authResult.accessToken &&
                    authResult.idToken
                ) {
                    this.setSession(authResult)
                    resolve(authResult.accessToken)
                } else if (err) {
                    this.logout()
                    console.log(err)
                    reject(undefined)
                    // alert(
                    //     `Could not get a new token (${err.error}: ${err.error_description}).`
                    // )
                }
            })
        })
    }

    logout() {
        // Remove tokens and expiry time
        this.accessToken = null
        this.idToken = null
        this.expiresAt = 0

        // Remove isLoggedIn flag from localStorage
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('user_details')
        localStorage.removeItem('access_token')
        localStorage.setItem('redirectTo', window.location.href)

        // log out of auth0
        window.location.href = `https://${AUTH_CONFIG.domain}/v2/logout?returnTo=${window.location.origin}&client_id=${AUTH_CONFIG.clientId}`
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = this.expiresAt
        return new Date().getTime() < expiresAt
    }
}
