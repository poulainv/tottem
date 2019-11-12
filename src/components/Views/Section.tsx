import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Box } from 'grommet'
import range from 'lodash.range'
import React from 'react'
import Collection, { CollectionPlaceHolder } from '../Cards/Collection'
import { ProfilePageFragment, ICollection } from '../../fragments/profile'

interface Props {
    slug: string
    sectionId?: string
    index: number
}

export const getCollectionQuery = gql`
    query getCollection($slug: String, $sectionId: String, $index: Int) {
        collections(
            where: {
                section: {
                    AND: {
                        OR: [
                            { slug: { equals: $sectionId } }
                            { index: { equals: $index } }
                        ]
                        owner: { slug: { equals: $slug } }
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
    slug: string
    sectionId?: string
    index: number
}

const Section: React.FC<Props> = props => {
    const { loading, error, data } = useQuery<CollectionQuery, CollectionVars>(
        getCollectionQuery,
        {
            variables: {
                slug: props.slug,
                sectionId: props.sectionId,
                index: props.index,
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

export default Section
