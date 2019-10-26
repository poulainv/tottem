import { makeSchema } from 'nexus'
import { nexusPrismaPlugin } from 'nexus-prisma'
import * as types from './types'
import { join } from 'path'

export const schema = makeSchema({
    types: [types],
    plugins: [nexusPrismaPlugin()],
    typegenAutoConfig: {
        contextType: 'Context.Context',
        sources: [
            {
                source: '@generated/photon',
                alias: 'photon',
            },
            {
                source: require.resolve('./context'),
                alias: 'Context',
            },
        ],
    },
    outputs: {
        schema: join(__dirname, '/schema.graphql'),
    },
})
