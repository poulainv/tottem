import { GraphQLServer } from 'graphql-yoga'
import { createContext } from './context'
import { schema } from './schema'

const server = new GraphQLServer({
    schema,
    context: createContext(),
})

server.start(
    {
        endpoint: '/graphql',
        playground: '/graphql',
        subscriptions: false,
    },
    () => console.log(`🚀 Server ready at http://localhost:4000`)
)
