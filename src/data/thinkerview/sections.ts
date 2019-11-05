import { ISection, ICollection } from '../../types'
import collections from './collections'

const keyBy = require('lodash.groupby')

const collectionsBySection = keyBy(collections, (x: ICollection) => x.sectionId)

const sections: ISection[] = [
    {
        id: 'finance-11',
        collections: collectionsBySection['finance-11'],
        name: 'Finance',
        index: 0,
    },
    {
        id: 'societe-12',
        collections: collectionsBySection['societe-12'],
        name: 'Société',
        index: 1,
    },
    {
        id: 'geopolitique-13',
        collections: collectionsBySection['geopolitique-13'],
        name: 'Géopolitique',
        index: 2,
    },
    {
        id: 'climat-14',
        collections: collectionsBySection['climat-14'],
        name: 'Climat',
        index: 3,
    },
    {
        id: 'terrorisme-15',
        collections: collectionsBySection['terrorisme-15'],
        name: 'Terrorisme',
        index: 4,
    },
    {
        id: 'medias-16',
        collections: collectionsBySection['medias-16'],
        name: 'Médias',
        index: 5,
    },
    {
        id: 'technologies-17',
        collections: collectionsBySection['technologies-17'],
        name: 'Technologies',
        index: 6,
    },
]

export default sections
