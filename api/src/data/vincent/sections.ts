import { ISection, ICollection } from '../types'
import collections from './collections'
import keyBy from 'lodash.groupby'

const collectionsBySection = keyBy(collections, (x: ICollection) => x.sectionId)

const sections: ISection[] = [
    {
        id: '1',
        collections: collectionsBySection['1'],
        name: 'Société',
        index: 0,
    },
    {
        id: '3',
        collections: collectionsBySection['3'],
        name: 'Musique',
        index: 1,
    },
    // {
    //     id: '2',
    //     collections: collectionsBySection['2'],
    //     name: 'Tech',
    //     index: 1,
    // },
]

export default sections
