import { Photon } from '@generated/photon'
import vincent from '../../src/data/vincent/profile'
import humanetech from '../../src/data/humanetech/profile'
import thinkerview from '../../src/data/thinkerview/profile'
import { ICollection } from '../../src/types'

const photon = new Photon()

async function main() {
    for (const profile of [vincent, humanetech, thinkerview]) {
        console.log(`Create : ${profile.firstname} profile`)
        const user = await photon.users.create({
            data: {
                firstname: profile.firstname,
                slug: profile.slug,
                biography: profile.biography,
                pictureUrl: profile.pictureUrl,
                label: profile.label,
                profile: {
                    create: {
                        linkedin: profile.social && profile.social.linkedin,
                        youtube: profile.social && profile.social.youtube,
                        mail: profile.social && profile.social.mail,
                        website: profile.social && profile.social.website,
                    },
                },
            },
        })

        for (const section of profile.sections) {
            console.log(
                `Create : ${profile.slug}' collection ${section.name} items`
            )
            await photon.sections.create({
                data: {
                    name: section.name,
                    index: section.index,
                    owner: {
                        connect: {
                            id: user.id,
                        },
                    },
                    collections: {
                        create: section.collections.map(
                            (collection: ICollection) => {
                                return {
                                    name: collection.name,
                                    detail: collection.detail,
                                    date: collection.date.toString(),
                                    owner: {
                                        connect: {
                                            id: user.id,
                                        },
                                    },
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
                                }
                            }
                        ),
                    },
                },
            })
        }
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await photon.disconnect()
    })
