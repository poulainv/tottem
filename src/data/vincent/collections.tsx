import { Item, ICollection } from '../../types'

import items from './items'

const keyBy = require('lodash.groupby')

const itemsByCollection = keyBy(items, (x: Item) => x.collectionId)

export const collections: ICollection[] = [
    {
        id: '11',
        sectionId: '1',
        name: '**Books,** that get me inspired',
        items: itemsByCollection['11'],
    },
    {
        id: '13',
        sectionId: '1',
        name: '**Papers,** worth reading',
        items: itemsByCollection['13'],
    },
    {
        id: '10',
        sectionId: '1',
        name: '**Albums,** on repeat',
        items: itemsByCollection['10'],
    },
    {
        id: '15',
        sectionId: '1',
        name: '**Podcasts,** everyday',
        items: itemsByCollection['15'],
    },
    {
        id: '14',
        sectionId: '1',
        name: '**Influencers,** that get me inspired',
        items: itemsByCollection['14'],
    },
    {
        id: '12',
        sectionId: '1',
        name: '**Films,** that matter',
        items: itemsByCollection['12'],
    },
]

export default collections
