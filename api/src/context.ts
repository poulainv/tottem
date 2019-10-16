import { Photon } from '@generated/photon'

const photon = new Photon()

interface Context {
    photon: Photon
}

function createContext(): Context {
    return {
        photon,
    }
}

export { Context, createContext }
