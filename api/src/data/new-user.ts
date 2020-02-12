import { SectionCreateManyWithoutOwnerInput, ItemType } from '@prisma/client'
import cuid from 'cuid'
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
                        type: 'book',
                        author: 'Cennydd Bowles',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/31W0m1isq%2BL._SX322_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Future-Ethics-Cennydd-Bowles/dp/1999601912',
                        title: `Future Ethics`,
                        comment: `👋  You do not have to read this book to use Tottem. 
This is a friendly example of content you can add using the plus button above:
- Search book, album or even movie
- Add item from any link 
Move or delete this item using button on the right 👉`,
                    },
                ],
            },
        ],
    },
]

export const getInitialSections: (
    userId: string
) => SectionCreateManyWithoutOwnerInput = userId => {
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
                                        comment: z.comment,
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
