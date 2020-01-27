/// <reference types="cypress" />

// @ts-ignore:
const randString = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)

describe('Space management', () => {
    beforeEach(() => {
        // @ts-ignore:
        cy.silentLogin()
        cy.visit('/me')
    })

    it('Space can be created', () => {
        const spaceTitle = `Cypress space ${randString()}`
        // @ts-ignore:
        cy.createSpace(spaceTitle)
        cy.get('[data-cy=nav-space]').should('contain', spaceTitle)
        cy.get('[data-cy=title-space]').should('have.value', spaceTitle)
    })

    it('Space can be deleted when empty', () => {
        const spaceTitle = `Cypress space ${randString()}`
        // @ts-ignore:
        cy.createSpace(spaceTitle)
        cy.get('[data-cy=option-space]').click()
        cy.get('[data-cy=delete-space]').click()
        cy.get('[data-cy=nav-space]').should('not.contain', spaceTitle)
        cy.url().should('include', '/me')
    })

    it('Space can not be deleted when not empty', () => {
        const spaceTitle = `Cypress space ${randString()}`
        // @ts-ignore:
        cy.createSpace(spaceTitle)
        // @ts-ignore:
        cy.createCollection(spaceTitle)
        // @ts-ignore:
        cy.goToSpace(spaceTitle)
        cy.get('[data-cy=option-space]').click()
        cy.get('[data-cy=delete-space]').click()
        cy.get('[data-cy=nav-space]').should('contain', spaceTitle)
        cy.get('[data-cy=title-space]').should('have.value', spaceTitle)
    })
})
