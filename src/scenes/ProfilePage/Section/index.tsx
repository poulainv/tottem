import { Box } from 'grommet'
import range from 'lodash.range'
import React from 'react'
import { useGetCollectionQuery } from '../../../generated/types'
import Collection, { CollectionPlaceHolder } from './CollectionCard'

interface Props {
    profileSlug: string
    sectionSlug?: string
    sectionIndex: number
}

export default (props: Props) => {
    const { loading, error, data } = useGetCollectionQuery({
        variables: {
            profileSlug: props.profileSlug,
            sectionSlug: props.sectionSlug,
            sectionIndex: props.sectionIndex,
        },
    })

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
                      .filter(x => x.items.length !== 0)
                      .sort(
                          (a, b) =>
                              new Date(b.createdAt).getTime() -
                              new Date(a.createdAt).getTime()
                      )
                      .map(collection => {
                          return (
                              <Collection
                                  key={collection.id}
                                  collection={collection}
                                  items={collection.items}
                              />
                          )
                      })}
        </Box>
    )
}
