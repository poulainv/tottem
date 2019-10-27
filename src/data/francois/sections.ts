import { ISection, ICollection } from '../../types'
import collections from './collections'

const keyBy = require('lodash.groupby')

const collectionsBySection = keyBy(collections, (x: ICollection) => x.sectionId)

const sections: ISection[] = [
    {
        id: '3',
        collections: collectionsBySection['3'],
        name: 'Books',
        index: 0,
    },
    {
        id: '2',
        collections: collectionsBySection['2'],
        name: 'Cinema',
        index: 1,
    },
    {
        id: '4',
        collections: collectionsBySection['4'],
        name: 'Music',
        index: 2,
    },
    {
        id: '1',
        collections: collectionsBySection['1'],
        name: 'Society',
        index: 3,
    },
]

export default sections
