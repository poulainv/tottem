import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Box } from 'grommet'
import range from 'lodash.range'
import React from 'react'
import Collection, { CollectionPlaceHolder } from './CollectionCard'
import { ICollection } from '../types'
import { ProfilePageFragment } from '../queries'

interface Props {
    profileSlug: string
    sectionSlug?: string
    sectionIndex: number
}

export const getCollectionQuery = gql`
    query getCollection(
        $profileSlug: String
        $sectionSlug: String
        $sectionIndex: Int
    ) {
        collections(
            where: {
                section: {
                    AND: {
                        OR: [
                            { slug: { equals: $sectionSlug } }
                            { index: { equals: $sectionIndex } }
                        ]
                        owner: { slug: { equals: $profileSlug } }
                    }
                }
            }
        ) {
            ...CollectionProfilePage
        }
    }
    ${ProfilePageFragment.collection}
`

interface CollectionQuery {
    collections: ICollection[]
}

interface CollectionVars {
    profileSlug: string
    sectionSlug?: string
    sectionIndex: number
}

export default (props: Props) => {
    const { loading, error, data } = useQuery<CollectionQuery, CollectionVars>(
        getCollectionQuery,
        {
            variables: {
                profileSlug: props.profileSlug,
                sectionSlug: props.sectionSlug,
                sectionIndex: props.sectionIndex,
            },
        }
    )

    return (
        <Box
            direction="column"
            fill
            margin={{ top: 'xsmall' }}
            responsive={false}
        >
            {loading || data === undefined
                ? range(4).map(x => (
                      <CollectionPlaceHolder key={x.toString()} />
                  ))
                : data.collections
                      .filter((x: ICollection) => x.items.length !== 0)
                      .sort(
                          (a: ICollection, b: ICollection) =>
                              new Date(b.date).getTime() -
                              new Date(a.date).getTime()
                      )
                      .map((collection: ICollection) => {
                          return (
                              <Collection
                                  key={collection.name}
                                  data={collection}
                              />
                          )
                      })}
        </Box>
    )
}
