import gql from 'graphql-tag'
import { Fragments } from '../../queries'
import { useQuery } from '@apollo/react-hooks'
import { Item } from '../../types'

interface CollectionItems {
    id: string
    slug: string
    items: Item[]
}

const itemsQuery = gql`
    query getItems($collectionId: ID) {
        collection(where: { id: $collectionId }) {
            id
            slug
            items {
                ...ItemFull
            }
        }
    }
    ${Fragments.item}
`

interface QueryData {
    collection: CollectionItems
}

interface QueryVars {
    collectionId: string
}

const useItems = (collectionId: string) => {
    return useQuery<QueryData, QueryVars>(itemsQuery, {
        variables: {
            collectionId,
        },
    })
}

export { useItems, itemsQuery }
