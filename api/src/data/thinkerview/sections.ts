import { ISection, ICollection } from '../types'
import collections from './collections'
import keyBy from 'lodash.groupby'

const collectionsBySection = keyBy(collections, (x: ICollection) => x.sectionId)

const sections: ISection[] = [
    {
        id: '11',
        collections: collectionsBySection['11'],
        name: 'Finance',
        index: 0,
    },
    {
        id: '12',
        collections: collectionsBySection['12'],
        name: 'Société',
        index: 1,
    },
    {
        id: '13',
        collections: collectionsBySection['13'],
        name: 'Géopolitique',
        index: 2,
    },
    {
        id: '14',
        collections: collectionsBySection['14'],
        name: 'Climat',
        index: 3,
    },
    {
        id: '15',
        collections: collectionsBySection['15'],
        name: 'Terrorisme',
        index: 4,
    },
    {
        id: '16',
        collections: collectionsBySection['16'],
        name: 'Médias',
        index: 5,
    },
    {
        id: '17',
        collections: collectionsBySection['17'],
        name: 'Technologies',
        index: 6,
    },
]

export default sections
