import { Item, ICollection } from '../../types'

import items from './items'

const keyBy = require('lodash.groupby')

const itemsByCollection = keyBy(items, (x: Item) => x.collectionId)

export const collections: ICollection[] = [
    {
        id: '11',
        sectionId: '1',
        date: new Date('2019-10-01T12:00:00'),
        name:
            "**Essais et biographies** qui revisitent l'entreprise et l'économie 🕴",
        items: itemsByCollection['11'],
    },
    {
        id: '16',
        sectionId: '1',
        date: new Date('2019-10-01T12:00:00'),
        name:
            "Manipulation de masses, destruction de l'attention : ce qui m'a poussé à créer **Tottem** 🤯",
        items: itemsByCollection['16'],
        detail: `Nombreuses références pour découvrir les effets collatéraux de l'utilisation massive des algorithmes de recommendations. Système de gratification aliénant, maximisation des clics et des vues en ignorant nos valeurs, crise du désir & manipulation de masse qui affecte nos démocraties...`,
    },
    {
        id: '15',
        sectionId: '1',
        date: new Date('2019-10-01T12:00:00'),
        name: '**Podcasts,** everyday',
        items: itemsByCollection['15'],
    },
    {
        id: '14',
        sectionId: '1',
        date: new Date('2019-10-01T12:00:00'),
        name: '**Influenceurs** (et gouroux) ! 🙏',
        items: itemsByCollection['14'],
    },
    {
        id: '13',
        sectionId: '2',
        date: new Date('2019-10-01T12:00:00'),
        name: '**Tech articles** worth reading',
        items: itemsByCollection['13'],
    },
    {
        id: '17',
        sectionId: '2',
        date: new Date('2019-10-01T12:00:00'),
        name: '**Tools**, productivity obsessed 🍿',
        items: itemsByCollection['17'],
    },
    {
        id: '10',
        sectionId: '3',
        date: new Date('2019-10-01T12:00:00'),
        name: '**Albums électroniques** sur _repeat_ 👌',
        items: itemsByCollection['10'],
    },
    {
        id: '18',
        sectionId: '3',
        date: new Date('2019-10-01T12:00:00'),
        name: 'Albums **Instrumentaux** 💎',
        items: itemsByCollection['18'],
    },
    {
        id: '19',
        sectionId: '3',
        date: new Date('2019-10-01T12:00:00'),
        name: 'Old school & **indémodables** 🎸',
        items: itemsByCollection['19'],
    },
    // {
    //     id: '12',
    //     sectionId: '1',
    // date: new Date('2019-10-01T12:00:00'),
    //     name: '**Films,** that matter',
    //     items: itemsByCollection['12'],
    // },
]

export default collections
