import gql from 'graphql-tag'

export const newCollectionQuery = gql`
    mutation CreateCollection(
        $name: String!
        $detail: String
        $slug: String!
        $ownerSlug: String!
        $sectionId: ID!
    ) {
        collection: createOneCollection(
            data: {
                slug: $slug
                name: $name
                detail: $detail
                section: { connect: { id: $sectionId } }
                owner: { connect: { slug: $ownerSlug } }
            }
        ) {
            id
            slug
        }
    }
`

export const updateCollectionQuery = gql`
    mutation UpdateCollection(
        $collectionId: ID!
        $slug: String!
        $name: String!
        $detail: String
    ) {
        collection: updateOneCollection(
            where: { id: $collectionId }
            data: { name: $name, detail: $detail, slug: $slug }
        ) {
            id
            slug
        }
    }
`
