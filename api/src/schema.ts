import { makeSchema } from 'nexus'
import { nexusPrismaPlugin } from 'nexus-prisma'
import * as types from './types'
import { join } from 'path'

export const schema = makeSchema({
    types: [types, nexusPrismaPlugin({ types })],
    outputs: {
        schema: join(__dirname, '/schema.graphql'),
    },
})
