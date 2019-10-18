import { makeSchema } from 'nexus'
import { nexusPrismaPlugin } from 'nexus-prisma'
import * as types from './types'
import { join } from 'path'

export const schema = makeSchema({
    types: [types, nexusPrismaPlugin({ types })],
    prettierConfig: join(__dirname, '../../.prettierrc.json'),
    outputs: {
        schema: join(__dirname, '/schema.graphql'),
    },
})
