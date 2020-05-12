import { makeSchema } from '@nexus/schema'
import { nexusPrismaPlugin } from 'nexus-prisma'
import { join } from 'path'
import * as Objects from './Object'
import * as Query from './Query'
import * as Mutation from './Mutation'

export const schema = makeSchema({
    types: [Objects, Query, Mutation],
    plugins: [nexusPrismaPlugin()],
    outputs: {
        typegen: join(__dirname, '../nexus.ts'),
        schema: join(__dirname, '../schema.graphql'),
    },
})
