import { Item, ICollection } from '../../types'
import items from './items'

const keyBy = require('lodash.groupby')

const itemsByCollection = keyBy(items, (x: Item) => x.collectionId)

const collections: ICollection[] = [
    {
        id: '1',
        name:
            '**Eric Dénécé** - La France en danger : où en est le renseignement ? ',
        items: itemsByCollection['1'],
    },
    {
        id: '2',
        name:
            '**Vikash Dhorasoo** - Football : du pain, des jeux et des magouilles ?',
        items: itemsByCollection['2'],
    },
    {
        id: '3',
        name: "**Maxime Renahy** - DGSE : l'impuissance de l'état ?",
        items: itemsByCollection['3'],
    },
    {
        id: '4',
        name:
            '**Frédéric Pierucci** - Alstom : la France vendue à la découpe ? ',
        items: itemsByCollection['4'],
    },
    {
        id: '5',
        name: '**Pierre Conesa** - Arabie Saoudite, un pays protégé ?',
        items: itemsByCollection['5'],
    },
    {
        id: '6',
        name:
            "**Laurent Alexandre et Philippe Bihouix** - Débat : L'avenir de l'humanité ?",
        items: itemsByCollection['6'],
    },
    {
        id: '7',
        name: '**Jean Ziegler** - Pourquoi il faut détruire le capitalisme ?',
        items: itemsByCollection['7'],
    },
    {
        id: '8',
        name: '**Monique Pinçon-Charlot** - Casse sociale, le début ?',
        items: itemsByCollection['8'],
    },
    {
        id: '9',
        name: "**Barbara Stiegler** - S'adapter à une société malade ?",
        items: itemsByCollection['9'],
    },
    {
        id: '10',
        name: '**Coralie Delaume** - Union Européenne pour ou contre ?',
        items: itemsByCollection['10'],
    },
    {
        id: '11',
        name: '**Jean-Luc Mélenchon** - Face à la réalité ?',
        items: itemsByCollection['11'],
    },
    {
        id: '12',
        name:
            "**Bernard Stiegler** - Etat d'urgence, géopolitique, Médias, Gilets Jaunes",
        items: itemsByCollection['12'],
    },
    {
        id: '13',
        name:
            '**Champagne, Duplessy et Fontaine** - Investigation sans filtre ?',
        items: itemsByCollection['13'],
    },
    {
        id: '14',
        name: "**Alain Damasio** - L'intuition de la science-fiction ?",
        items: itemsByCollection['14'],
    },
]

export default collections
