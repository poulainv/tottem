import { ApolloServer } from 'apollo-server'
import { applyMiddleware } from 'graphql-middleware'
import { createContext } from './context'
import { schema } from './schema'
import dotenv from 'dotenv'
import logger from './logging'
import { permissions } from './services/authorization'

dotenv.config()

const schemaMiddleware = applyMiddleware(schema, permissions)

const server = new ApolloServer({
    schema: schemaMiddleware,
    context: ({ req }) => createContext(req),
    engine: {
        apiKey: process.env.ENGINE_API_KEY,
    },
    playground: {
        tabs: [
            {
                name: 'authenticated',
                query: '{collections { id } }',
                endpoint: 'graphql',
                headers: {
                    authorization: '',
                },
            },
        ],
    },
})

server.listen({ port: process.env.PORT || 4000, graphqlPath: '/graphql' }, () =>
    logger.info(`🚀 Server ready at http://localhost:4000/graphql`)
)
