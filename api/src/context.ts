import { PrismaClient } from '@prisma/client'
import { verifyIdentity, AuthenticatedUser } from './services/authentication'
import express from 'express'
import logger from './logging'

const client = new PrismaClient()

interface Context {
    prisma: PrismaClient
    user: Promise<AuthenticatedUser | undefined>
}

const createContext: (req: express.Request) => Context = req => {
    // The request is authenticated or not
    let user: Promise<AuthenticatedUser | undefined>
    if (req.headers !== undefined && req.headers.authorization) {
        const token = req.headers.authorization
        logger.debug(
            `Request with bearer token found for ${req.method} ${req.path}`
        )
        user = verifyIdentity(token)
    } else {
        logger.debug('Authorization headers not found')
        user = Promise.resolve(undefined)
    }
    user = user.catch(err => {
        // If any already caught error return undefined
        logger.error(err)
        return undefined
    })

    return {
        user,
        prisma: client,
    }
}

export { Context, createContext }
