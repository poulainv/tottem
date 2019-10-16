import { ISection, ICollection } from '../../types'
import collections from './collections'

const keyBy = require('lodash.groupby')

const collectionsBySection = keyBy(collections, (x: ICollection) => x.sectionId)

const sections: ISection[] = [
    {
        id: '11',
        collections: collectionsBySection['1'],
        name: 'Finance',
        index: 0,
    },
    {
        id: '12',
        collections: collectionsBySection['2'],
        name: 'Société',
        index: 1,
    },
    {
        id: '13',
        collections: collectionsBySection['3'],
        name: 'Géopolitique',
        index: 2,
    },
    {
        id: '14',
        collections: collectionsBySection['4'],
        name: 'Climat',
        index: 3,
    },
    {
        id: '15',
        collections: collectionsBySection['5'],
        name: 'Terrorisme',
        index: 4,
    },
    {
        id: '16',
        collections: collectionsBySection['6'],
        name: 'Médias',
        index: 5,
    },
    {
        id: '17',
        collections: collectionsBySection['7'],
        name: 'Technologies',
        index: 6,
    },
]

export default sections
