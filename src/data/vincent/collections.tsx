import { Item, ICollection } from '../../types'

import items from './items'

const keyBy = require('lodash.groupby')

const itemsByCollection = keyBy(items, (x: Item) => x.collectionId)

export const collections: ICollection[] = [
    {
        id: '11',
        sectionId: '1',
        name:
            "**Essais et biographies** qui revisitent l'entreprise et l'économie 🕴",
        items: itemsByCollection['11'],
    },
    {
        id: '16',
        sectionId: '1',
        name:
            "**Manipulation de masses, destruction de l'attention : ce qui m'a poussé à créer Tottem 🤯",
        items: itemsByCollection['16'],
        detail:
            "Plusieurs volets pour découvrir les effets collatéraux de l'utilisation massive des algorithmes de recommendations.",
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
