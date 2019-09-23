import { ISection, ICollection } from '../../types'
import collections from './collections'

const keyBy = require('lodash.groupby')

const collectionsBySection = keyBy(collections, (x: ICollection) => x.sectionId)

const sections: ISection[] = [
    {
        id: '1',
        collections: collectionsBySection['1'],
        name: '',
        index: 0,
    },
]

export default sections
