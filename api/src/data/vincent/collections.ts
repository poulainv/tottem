import keyBy from 'lodash.groupby'
import { ICollection, Item } from '../types'
import items from './items'

const itemsByCollection = keyBy(items, (x: Item) => x.collectionId)

export const collections: ICollection[] = [
    {
        id: '11a',
        slug: 'foo-11a',
        sectionId: '1',
        date: new Date('2019-10-01T12:00:00'),
        name:
            "**Essais et biographies** qui m'ont fait voir l'entreprise et l'économie autrement 🕴",
        items: itemsByCollection['11'],
    },
    {
        id: '16',
        slug: 'foo-16',
        sectionId: '1',
        date: new Date('2019-10-01T12:00:00'),
        name:
            "Manipulation de masses, destruction de l'attention : ce qui m'a poussé à créer **Tottem** 🤯",
        items: itemsByCollection['16'],
        detail: `Nombreuses références pour découvrir les effets collatéraux de l'utilisation massive des algorithmes de recommendations des plateformes de social media. Le système de gratification aliénie, afin d'optimiser le nombre de vues et de clics, en zappant complètement ce qui nous anime vraiment. Tristan Harris et Joe Edelman sont les penseurs et les contradicteurs principaux aux US qui se battent contre l'hégémonie attentionnel du système en place.`,
    },
    // {
    //     id: '15',
    // slug: 'foo-15',
    //     sectionId: '1',
    //     date: new Date('2019-10-01T12:00:00'),
    //     name: '**Podcasts,** everyday',
    //     items: itemsByCollection['15'],
    // },
    {
        id: '14a',
        slug: 'foo-14a',
        sectionId: '1',
        date: new Date('2019-10-01T12:00:00'),
        name: '**Influenceurs** (et gouroux) ! 🙏',
        items: itemsByCollection['14'],
    },
    {
        id: '13',
        slug: 'foo-13',
        sectionId: '2',
        date: new Date('2019-10-01T12:00:00'),
        name: '**Tech articles** worth reading',
        items: itemsByCollection['13'],
    },
    {
        id: '17',
        slug: 'foo-17',
        sectionId: '2',
        date: new Date('2019-10-01T12:00:00'),
        name: '**Tools**, productivity obsessed 🍿',
        items: itemsByCollection['17'],
    },
    {
        id: '10c',
        slug: 'foo-10c',
        sectionId: '3',
        date: new Date('2019-10-01T12:00:00'),
        name: '**Albums électroniques** sur _repeat_ 👌',
        items: itemsByCollection['10'],
    },
    {
        id: '18a',
        slug: 'foo-18a',
        sectionId: '3',
        date: new Date('2019-10-01T12:00:00'),
        name: 'Albums **Instrumentaux** 💎',
        items: itemsByCollection['18'],
    },
    {
        id: '19a',
        slug: 'foo-19a',
        sectionId: '3',
        date: new Date('2019-10-01T12:00:00'),
        name: 'Old school & **indémodables** 🎸',
        items: itemsByCollection['19'],
    },
    // {
    //     id: '12',
    //  slug: 'foo-12',
    //     sectionId: '1',
    // date: new Date('2019-10-01T12:00:00'),
    //     name: '**Films,** that matter',
    //     items: itemsByCollection['12'],
    // },
]

export default collections
