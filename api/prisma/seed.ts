import { Photon } from '@generated/photon'
import vincent from '../../src/data/vincent/profile'
import humanetech from '../../src/data/humanetech/profile'
import thinkerview from '../../src/data/thinkerview/profile'
import { ISection } from '../../src/types'

const photon = new Photon()

async function main() {
    for (const profile of [vincent, humanetech, thinkerview]) {
        console.log(`Create : ${profile.firstname} profile`)
        const user = await photon.users.create({
            data: {
                firstname: profile.firstname,
                slug: profile.slug,
                biography: profile.biography,
                sections: {
                    create: profile.sections.map((section: ISection) => {
                        return {
                            id: section.id,
                            name: section.name,
                            index: section.index,
                        }
                    }),
                },
            },
            include: {
                sections: true,
            },
        })

        for (const section of profile.sections) {
            for (const collection of section.collections) {
                console.log(
                    `Create : ${profile.slug}' collection ${
                        collection.name
                    }  with ${collection.items &&
                        collection.items.length} items`
                )
                await photon.collections.create({
                    data: {
                        // author: {
                        //     connect: {
                        //         id: user.id,
                        //     },
                        // },
                        section: {
                            connect: {
                                id: section.id,
                            },
                        },
                        name: collection.name,
                        detail: collection.detail,
                        date: collection.date.toString(),
                        items: {
                            create:
                                collection.items &&
                                collection.items.map(x => {
                                    return {
                                        title: x.title,
                                        author: x.author,
                                        type: x.type,
                                        productUrl: x.productUrl,
                                        imageUrl: x.imageUrl,
                                        comment: x.note,
                                    }
                                }),
                        },
                    },
                })
            }
        }
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await photon.disconnect()
    })
