import { Item, ICollection } from '../types'
import keyBy from 'lodash.groupby'
import items from './items'

const itemsByCollection = keyBy(items, (x: Item) => x.collectionId)

export const collections: ICollection[] = [
    {
        id: '111',
        sectionId: '1',
        date: new Date('2019-10-27T12:00:00'),
        name: '**Influencers** people who inspire me 💡',
        items: itemsByCollection['11'],
    },
    {
        id: '112',
        sectionId: '1',
        date: new Date('2019-10-27T12:00:00'),
        name: 'People I **disagree** with 🤔',
        items: itemsByCollection['12'],
    },
    {
        id: '113',
        sectionId: '1',
        date: new Date('2019-10-27T12:00:00'),
        name: '**Science** and tech 🔭',
        items: itemsByCollection['13'],
    },
    {
        id: '121',
        sectionId: '2',
        date: new Date('2019-10-27T12:00:00'),
        name: 'Favorite **directors** 🎥',
        items: itemsByCollection['21'],
    },
    {
        id: '122',
        sectionId: '2',
        date: new Date('2019-10-27T12:00:00'),
        name: "**Actresses** I'm fond of 👩",
        items: itemsByCollection['22'],
    },
    {
        id: '123',
        sectionId: '2',
        date: new Date('2019-10-27T12:00:00'),
        name: 'Movies to **watch and watch** again 🍿',
        items: itemsByCollection['23'],
    },
    {
        id: '124',
        sectionId: '2',
        date: new Date('2019-10-27T12:00:00'),
        name: 'TV series that got me **hooked** 👀',
        items: itemsByCollection['24'],
    },
    {
        id: '131',
        sectionId: '3',
        date: new Date('2019-10-27T12:00:00'),
        name: 'My **favorite** authors ✍️',
        items: itemsByCollection['31'],
    },
    {
        id: '132',
        sectionId: '3',
        date: new Date('2019-10-27T12:00:00'),
        name: 'Not my cup of tea 🍵',
        items: itemsByCollection['32'],
    },
    {
        id: '133',
        sectionId: '3',
        date: new Date('2019-10-27T12:00:00'),
        name: '**Essays** and narratives 📕',
        items: itemsByCollection['33'],
    },
    {
        id: '134',
        sectionId: '3',
        date: new Date('2019-10-27T12:00:00'),
        name: '**Novels** 📗',
        items: itemsByCollection['34'],
    },
    {
        id: '141',
        sectionId: '4',
        date: new Date('2019-10-27T12:00:00'),
        name: '**Artists**',
        items: itemsByCollection['41'],
    },
    {
        id: '142',
        sectionId: '4',
        date: new Date('2019-10-27T12:00:00'),
        name: '**Songs** on repeat',
        items: itemsByCollection['42'],
    },
]

export default collections
