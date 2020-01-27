/// <reference types="cypress" />

// @ts-ignore:
const randString = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)

describe('Collection management', () => {
    beforeEach(() => {
        // @ts-ignore:
        cy.silentLogin()
        cy.visit('/me')
    })

    it('Collection can be created', () => {
        const sectionTitle = `Cypress section ${randString()}`
        const collectionTitle = `Cypress collection ${randString()}`
        // @ts-ignore:
        cy.createSpace(sectionTitle)

        // @ts-ignore:
        cy.createCollection(sectionTitle, collectionTitle)
        cy.get('[data-cy=title-collection]').should(
            'have.value',
            collectionTitle
        )
        cy.get('[data-cy=nav-collection]').should('contain', collectionTitle)
        // @ts-ignore:
        cy.goToSpace(sectionTitle)
        cy.get('[data-cy=preview-collection-title]').should(
            'contain',
            collectionTitle
        )
    })
})
