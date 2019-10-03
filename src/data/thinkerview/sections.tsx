import { ISection, ICollection } from '../../types'
import collections from './collections'

const keyBy = require('lodash.groupby')

const collectionsBySection = keyBy(collections, (x: ICollection) => x.sectionId)

const sections: ISection[] = [
    {
        id: '1',
        collections: collectionsBySection['1'],
        name: 'Finance',
        index: 0,
    },
    {
        id: '2',
        collections: collectionsBySection['2'],
        name: 'Société',
        index: 1,
    },
    {
        id: '3',
        collections: collectionsBySection['3'],
        name: 'Géopolitique',
        index: 2,
    },
    {
        id: '4',
        collections: collectionsBySection['4'],
        name: 'Climat',
        index: 3,
    },
    {
        id: '5',
        collections: collectionsBySection['5'],
        name: 'Terrorisme',
        index: 4,
    },
    {
        id: '6',
        collections: collectionsBySection['6'],
        name: 'Médias',
        index: 5,
    },
    {
        id: '7',
        collections: collectionsBySection['7'],
        name: 'Technologies',
        index: 6,
    },
]

export default sections
