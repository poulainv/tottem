import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { ICollection } from './types'

export const Fragments = {
    item: gql`
        fragment ItemFull on Item {
            id
            createdAt
            imageUrl
            comment
            productUrl
            title
            author
            type
            meta
        }
    `,
    collection: gql`
        fragment CollectionFull on Collection {
            id
            slug
            name
            createdAt
            detail
            section {
                slug
            }
            items {
                id
                createdAt
                imageUrl
                comment
                productUrl
                title
                author
                type
                meta
            }
        }
    `,
    user: gql`
        fragment UserProfile on User {
            id
            slug
            firstname
            pictureUrl
        }
    `,
}

const collectionQuery = gql`
    query getCollectionId($collectionId: ID) {
        collection(where: { id: $collectionId }) {
            ...CollectionFull
        }
    }
    ${Fragments.collection}
`

interface CollectionQuery {
    collection: ICollection
}

interface CollectionVars {
    collectionId: string
}

export const useCollection = (collectionId: string) => {
    return useQuery<CollectionQuery, CollectionVars>(collectionQuery, {
        variables: {
            collectionId,
        },
        // pollInterval: 5000,
    })
}
