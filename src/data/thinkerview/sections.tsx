import { Section, ICollection } from '../../types'
import collections from './collections'

const keyBy = require('lodash.groupby')

const collectionsBySection = keyBy(collections, (x: ICollection) => x.sectionId)

const sections: Section[] = [
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
]

export default sections
