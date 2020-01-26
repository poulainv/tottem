// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const randString = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)

Cypress.Commands.add('login', (overrides = {}) => {
    Cypress.log({
        name: 'loginViaAuth0',
    })

    const options = {
        method: 'POST',
        url: Cypress.env('auth_url'),
        body: {
            grant_type: 'password',
            username: Cypress.env('auth_username'),
            password: Cypress.env('auth_password'),
            audience: Cypress.env('auth_audience'),
            scope: 'openid profile email',
            client_id: Cypress.env('auth_client_id'),
            client_secret: Cypress.env('auth_client_secret'),
        },
    }
    cy.request(options)
})

Cypress.Commands.add('silentLogin', (overrides = {}) => {
    Cypress.log({
        name: 'loginViaCookie',
    })

    cy.setCookie('access_token', Cypress.env('auth_access_token'))
    cy.setCookie('id_token', Cypress.env('auth_access_token'))
    cy.setCookie('isLoggedIn', 'true')
    window.localStorage.setItem(
        'user_details',
        Cypress.env('auth_user_details')
    )
    window.localStorage.setItem(
        'access_token',
        Cypress.env('auth_access_token')
    )
    window.localStorage.setItem('expired_at', '9579951618285')
    window.localStorage.setItem('isLoggedIn', 'true')
})

Cypress.Commands.add('createSpace', titleOverride => {
    Cypress.log({
        name: 'createSpace',
    })

    const spaceTitle = titleOverride || `Cypress space`
    cy.get('[data-cy=new-space]').click()
    cy.get('[data-cy=title-space]').type(spaceTitle)
})

Cypress.Commands.add('goToSpace', sectionId => {
    Cypress.log({
        name: 'goToSpace',
    })

    cy.get('[data-cy=nav-space]')
        .filter(`:contains(${sectionId})`)
        .click()
})

Cypress.Commands.add('goToCollection', collectionId => {
    Cypress.log({
        name: 'goToCollection',
    })

    if (collectionId) {
        cy.get('[data-cy=nav-collection]')
            .filter(`:contains(${collectionId})`)
            .click()
    } else {
        cy.get('[data-cy=nav-collection]')
            .eq(0)
            .click()
    }
})

Cypress.Commands.add('createCollection', (sectionId, titleOverride) => {
    Cypress.log({
        name: 'createCollection',
    })

    const collectionTitle = titleOverride || `Cypress collection`
    if (sectionId) {
        cy.goToSpace(sectionId)
    } else {
        cy.get('[data-cy=nav-space]')
            .eq(-1)
            .click()
    }
    cy.get('[data-cy=new-collection]').click()
    cy.get('[data-cy=title-collection]', { timeout: 6000 }).type(
        collectionTitle
    )
})

Cypress.Commands.add('createItemUrl', url => {
    Cypress.log({
        name: 'createItemUrl',
    })

    cy.get('[data-cy=new-item]').click()
    cy.get('[data-cy=item-url]').click()
    cy.get('[data-cy=item-url-input]').type(`${url}{enter}`)
    cy.get('[data-cy=loading]').should('not.exist')
})

Cypress.Commands.add('createItemSearch', (type, search) => {
    Cypress.log({
        name: 'createItemSearch',
    })

    cy.get('[data-cy=new-item]').click()
    cy.get(`[data-cy=item-${type}]`).click()
    cy.get('[data-cy=item-search-input]').type(search)

    // Must wait cause datasource completion not empty due to this bug
    // https://github.com/apollographql/react-apollo/issues/3505
    // Should be fixed when upgrade to apolloclient 3
    cy.wait(1000)
    cy.get('[data-cy=item-result-search]')
        .eq(0)
        .should('contain', search)
        .click()
    cy.get('[data-cy=loading]').should('not.exist')
})
