import gql from 'graphql-tag'

export const ProfilePageFragment = {
    collection: gql`
        fragment CollectionProfilePage on Collection {
            id
            slug
            name
            createdAt
            detail
            items(first: 4) {
                id
                imageUrl
                productUrl
                title
                author
                type
            }
        }
    `,
    user: gql`
        fragment UserProfilePage on User {
            id
            slug
            firstname
            pictureUrl
            biography
            label
            mail
            linkedin
            youtube
            website
        }
    `,
    section: gql`
        fragment SectionProfilePage on Section {
            id
            slug
            name
            index
        }
    `,
}
