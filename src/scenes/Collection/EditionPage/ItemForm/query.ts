import gql from 'graphql-tag'
import { Fragments } from '../../queries'
import { Item } from '../../types'

export interface QueryData {
    items: Item[]
}

export interface QueryVars {
    collectionId: string
    url: string
}

const addItemByUrlQuery = gql`
    mutation CreateItem($url: String!, $collectionId: String!) {
        items: createItem(collectionId: $collectionId, url: $url) {
            ...ItemFull
        }
    }
    ${Fragments.item}
`
export { addItemByUrlQuery }
