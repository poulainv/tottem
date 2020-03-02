import { createContext } from '../context'
import { schema, server } from 'nexus-future'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

schema.addToContext(req => createContext(req))

server.custom(({ express }) => {
    express.use(cors())
})
