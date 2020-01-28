import { makeSchema } from 'nexus'
import { nexusPrismaPlugin } from 'nexus-prisma'
import { join } from 'path'
import * as Objects from './Object'
import * as Query from './Query'
import * as Mutation from './Mutation'

export const schema = makeSchema({
    types: [Objects, Query, Mutation],
    plugins: [nexusPrismaPlugin()],
    typegenAutoConfig: {
        contextType: 'Context.Context',
        sources: [
            {
                source: '@prisma/photon',
                alias: 'photon',
            },
            {
                source: require.resolve('../context'),
                alias: 'Context',
            },
        ],
    },
    outputs: {
        typegen: join(__dirname, '../nexus.ts'),
        schema: join(__dirname, '../schema.graphql'),
    },
})
