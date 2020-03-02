import { PrismaClient } from '@prisma/client'
import { verifyIdentity, AuthenticatedUser } from './services/authentication'
import { IncomingMessage } from 'http'
import { log } from 'nexus-future'

const client = new PrismaClient()

interface Context {
    prisma: PrismaClient
    user: Promise<AuthenticatedUser | undefined>
}

const createContext: (req: IncomingMessage) => Context = req => {
    // The request is authenticated or not
    let user: Promise<AuthenticatedUser | undefined>
    if (req.headers !== undefined && req.headers.authorization) {
        const token = req.headers.authorization
        log.debug(
            `Request with bearer token found for ${req.method} ${req.url}`
        )
        user = verifyIdentity(token)
    } else {
        log.debug('Authorization headers not found')
        user = Promise.resolve(undefined)
    }
    user = user.catch(err => {
        // If any already caught error return undefined
        log.error(err)
        return undefined
    })

    return {
        user,
        prisma: client,
    }
}

export { Context, createContext }
