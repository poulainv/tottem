import { Item, ICollection } from '../../types'

import items from './items'

const keyBy = require('lodash.groupby')

const itemsByCollection = keyBy(items, (x: Item) => x.collectionId)

export const collections: ICollection[] = [
    {
        id: '11',
        sectionId: '1',
        date: new Date('2019-10-27T12:00:00'),
        name: '**Influencers** people who inspire me 💡',
        items: itemsByCollection['11'],
    },
    {
        id: '12',
        sectionId: '1',
        date: new Date('2019-10-27T12:00:00'),
        name: 'People I **disagree** with 🤔',
        items: itemsByCollection['12'],
    },
    {
        id: '13',
        sectionId: '1',
        date: new Date('2019-10-27T12:00:00'),
        name: '**Science** and tech 🔭',
        items: itemsByCollection['13'],
    },
    {
        id: '21',
        sectionId: '2',
        date: new Date('2019-10-27T12:00:00'),
        name: 'Favorite **directors** 🎥',
        items: itemsByCollection['21'],
    },
    {
        id: '22',
        sectionId: '2',
        date: new Date('2019-10-27T12:00:00'),
        name: 'Movies to **watch and watch** again 🍿',
        items: itemsByCollection['22'],
    },
    {
        id: '23',
        sectionId: '2',
        date: new Date('2019-10-27T12:00:00'),
        name: 'TV series that got me **hooked** 👀',
        items: itemsByCollection['23'],
    },
    {
        id: '31',
        sectionId: '3',
        date: new Date('2019-10-27T12:00:00'),
        name: 'My **favorite** authors ✍️',
        items: itemsByCollection['31'],
    },
    {
        id: '32',
        sectionId: '3',
        date: new Date('2019-10-27T12:00:00'),
        name: 'Not my cup of tea 🍵',
        items: itemsByCollection['32'],
    },
    {
        id: '33',
        sectionId: '3',
        date: new Date('2019-10-27T12:00:00'),
        name: '**Essays** and narratives 📕',
        items: itemsByCollection['33'],
    },
    {
        id: '34',
        sectionId: '3',
        date: new Date('2019-10-27T12:00:00'),
        name: '**Novels** 📗',
        items: itemsByCollection['34'],
    },
    {
        id: '41',
        sectionId: '4',
        date: new Date('2019-10-27T12:00:00'),
        name: '**Artists**',
        items: itemsByCollection['41'],
    },
    {
        id: '42',
        sectionId: '4',
        date: new Date('2019-10-27T12:00:00'),
        name: '**Songs** on repeat',
        items: itemsByCollection['42'],
    },
]

export default collections
