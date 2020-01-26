/// <reference types="cypress" />

describe('User Management', () => {
    it('sign-in via auth0', () => {
        // @ts-ignore:
        cy.login()
            .then(resp => {
                return resp.body
            })
            .then(body => {
                const { access_token, expires_in, id_token } = body
                const auth0State = {
                    nonce: '',
                    state: 'some-random-state',
                }
                const callbackUrl = `http://localhost:3000/auth/callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`
                cy.visit(callbackUrl, {
                    onBeforeLoad(win) {
                        win.document.cookie =
                            'com.auth0.auth.some-random-state=' +
                            JSON.stringify(auth0State)
                    },
                })
            })
    })
})
