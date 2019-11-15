import { Fragments } from '../queries'
import { ICollection, User } from '../types'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

interface CollectionQuery {
    user: User
    collection: ICollection
}

interface CollectionVars {
    slug: string
    collectionId: string
}

const collectionQuery = gql`
    query getCollectionPage($slug: String, $collectionId: String) {
        user(where: { slug: $slug }) {
            ...UserProfile
        }
        collection(where: { slug: $collectionId }) {
            ...CollectionFull
        }
    }
    ${Fragments.collection}
    ${Fragments.user}
`

const useCollection = (profile: string, collectionId: string) => {
    const isBrowser = typeof window !== 'undefined'
    return useQuery<CollectionQuery, CollectionVars>(collectionQuery, {
        ssr: true,
        returnPartialData: isBrowser,
        variables: {
            slug: profile,
            collectionId,
        },
    })
}

export { useCollection }
