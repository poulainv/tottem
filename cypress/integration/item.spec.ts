/// <reference types="cypress" />

describe('Item management', () => {
    beforeEach(() => {
        // @ts-ignore:
        cy.silentLogin()
        cy.visit('/me')
    })

    it('Items can be created from collection', () => {
        // @ts-ignore:
        cy.createSpace()
        // @ts-ignore:
        cy.createCollection()

        // @ts-ignore:
        cy.createItemSearch('book', 'le')
        cy.get('[data-cy=title-item]')
            .eq(0)
            .should('contain', 'Stendhal')

        // @ts-ignore:
        cy.createItemUrl(
            'https://www.lemonde.fr/international/article/2020/01/18/mysterieuse-pneumonie-en-chine-des-scientifiques-craignent-plus-d-un-millier-de-contaminations_6026423_3210.html'
        )
        cy.get('[data-cy=title-item]')
            .eq(0)
            .should('contain', 'pneumonie')

        // @ts-ignore:
        cy.createItemSearch('movie', 'The Tenant')
        cy.get('[data-cy=title-item]')
            .eq(0)
            .should('contain', 'The Tenant')
    })

    it('Creation item URL from inbox', () => {
        cy.get('[data-cy=inbox-count]').then($countPrevious => {
            const count = Number($countPrevious.text())
            // @ts-ignore:
            cy.createItemUrl(
                'https://www.lemonde.fr/international/article/2020/01/18/mysterieuse-pneumonie-en-chine-des-scientifiques-craignent-plus-d-un-millier-de-contaminations_6026423_3210.html'
            )
            cy.get('[data-cy=title-item]')
                .eq(0)
                .should('contain', 'pneumonie')

            cy.get('[data-cy=inbox-count]').then($countNext => {
                expect(Number($countNext.text())).to.eq(count + 1)
            })
        })
    })
})
