import { SectionCreateManyWithoutSectionsInput, ItemType } from '@prisma/photon'
import cuid = require('cuid')
import slugify from 'slugify'

const initialSections = [
    {
        name: 'Reading',
        index: 0,
        collections: [
            {
                name: '😍 Must read content',
                items: [
                    {
                        type: 'article',
                        author: 'Tristan Harris',
                        imageUrl: '/images/articles/clickgoal.jpg',
                        title: 'It’s Time to Redesign the Attention Economy',
                        productUrl:
                            'https://medium.com/thrive-global/its-time-to-redesign-the-attention-economy-f9215a2210be',
                    },
                    {
                        type: 'book',
                        author: 'Cennydd Bowles',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/31W0m1isq%2BL._SX322_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Future-Ethics-Cennydd-Bowles/dp/1999601912',
                        title: `Future Ethics`,
                    },
                ],
            },
            {
                name: '🌍 Favorite non fiction books',
                items: [
                    {
                        type: 'book',
                        author: 'Yvon Chouinard',
                        imageUrl: '/images/books/patagonia.jpg',
                        productUrl:
                            'https://www.amazon.fr/Let-People-Surfing-Education-Businessman-Including/dp/0143109677',
                        title: 'Let my people go Surfing',
                    },
                    {
                        type: 'book',
                        author: 'Barry Schwartz',
                        imageUrl: '/images/books/paradox.jpg',
                        productUrl: '',
                        title: 'The Paradox of Choice',
                    },
                ],
            },
        ],
    },
    {
        name: 'Music',
        index: 1,
        collections: [
            {
                name: '🎷 Album on repeat',
                items: [
                    {
                        type: 'album',
                        author: 'Moderat',
                        imageUrl: '/images/albums/moderat.jpg',
                        title: 'II',
                        productUrl:
                            'https://open.spotify.com/album/4HDUXAmHj9KEs9wP1icwcy?si=BICxfcyhRLmKDM_-mIUVog',
                    },
                ],
            },
            {
                name: '🧘‍♂️ Relaxing music',
                items: [],
            },
        ],
    },
]

export const getInitialSections: (
    userId: string
) => SectionCreateManyWithoutSectionsInput = userId => {
    return {
        create: initialSections.map(x => {
            const cuidSection = cuid()
            return {
                id: cuidSection,
                slug: `${slugify(x.name)}-${cuidSection}`,
                name: x.name,
                collections: {
                    create: x.collections.map(y => {
                        const cuidCollection = cuid()
                        return {
                            id: cuidCollection,
                            slug: `${slugify(y.name)}-${cuidCollection}`,
                            name: y.name,
                            owner: {
                                connect: {
                                    authUserId: userId,
                                },
                            },
                            items: {
                                create: y.items.map(z => {
                                    return {
                                        title: z.title,
                                        author: z.author,
                                        type: z.type as ItemType,
                                        productUrl: z.productUrl,
                                        imageUrl: z.imageUrl,
                                    }
                                }),
                            },
                        }
                    }),
                },
            }
        }),
    }
}
