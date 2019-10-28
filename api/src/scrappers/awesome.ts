import cheerio from 'cheerio'
import fs from 'fs'
import MardownIt from 'markdown-it'
import emoji from 'node-emoji'
import uuid from 'uuid'
import { inferNewItemFromUrl } from '../parsers'
import { splitByTag, arrSum } from './utils'
import { ISection, ICollection, IItem } from '../interfaces'
import { SimpleFetch } from '../parsers/fetchers'

export interface AwesomeItem {
    title: string
    author?: string
    productUrl: string
}

export async function getAwesome(
    $: CheerioStatic,
    sectionTag: string,
    collectionTag: string,
    itemTag: string,
    shouldCreateDefaultCollection: boolean = false
): Promise<ISection[]> {
    // Find different section and group collections inside
    const sections = await Promise.all(
        splitByTag($, sectionTag).map(async ({ current, children }, index) => {
            // Find different collections and group items inside
            const collections: ICollection[] = await getCollections(
                children,
                collectionTag,
                itemTag,
                shouldCreateDefaultCollection
            )

            const collectionWithItems = collections.filter(x => x.items.length)

            return {
                id: uuid(),
                name: emoji.emojify($(current).text()),
                index,
                collections: collectionWithItems,
            }
        })
    )
    const sectionWithCollections = sections.filter(x => x.collections.length)
    return sectionWithCollections
}

async function getCollections(
    $: CheerioStatic,
    collectionTag: string,
    itemTag: string,
    shouldCreateDefaultCollection: boolean
) {
    const collections: Array<Promise<ICollection>> = splitByTag(
        $,
        collectionTag
    ).map(async collection => {
        const items = await getItems(collection.children, itemTag)
        return {
            id: uuid(),
            date: new Date(),
            name: emoji.emojify(
                $(collection.current)
                    .text()
                    .trim()
            ),
            items: items.filter(result => !(result instanceof Error)),
        }
    })

    // Create default collection when items are directly in sections
    if (shouldCreateDefaultCollection) {
        const items = await getItems($, itemTag)
        collections.push(
            Promise.resolve({
                id: uuid(),
                date: new Date(),
                name: 'Basic',
                items: items.filter(result => !(result instanceof Error)),
            })
        )
    }
    return Promise.all(collections)
}

async function mergeNativeAndFetchedInfos(
    inferredInfo: Promise<IItem>,
    item: AwesomeItem
) {
    return {
        ...(await inferredInfo),
        ...item,
    }
}

async function getItems($: CheerioStatic, tag: string): Promise<IItem[]> {
    const items: Array<Promise<IItem>> = []
    $(tag).each(async (i, el) => {
        const nativeContent = getNativeContent($(el))
        const item = inferNewItemFromUrl(nativeContent.productUrl)
        items.push(mergeNativeAndFetchedInfos(item, nativeContent))
    })
    return Promise.all(items.map(p => p.catch(e => e)))
}

export function getNativeContent(el: Cheerio) {
    return {
        productUrl: el.children('a').attr('href') || el.attr('href'),
        title: el
            .clone()
            .children()
            .remove()
            .end()
            .text()
            .trim(),
    }
}

async function main() {
    const md = MardownIt()
    const githubMd = await SimpleFetch(
        'https://raw.githubusercontent.com/catalinmiron/awesome-prisma/master/readme.md'
    )
    const awesomeHtml = md.render(githubMd)
    const $ = cheerio.load(awesomeHtml)
    const res = await getAwesome($, 'h2', 'h3', 'li a', true)
    console.log(res)
    const json = JSON.stringify(res)
    fs.writeFile(
        '/Users/vincentpoulain/Development/quiet/src/data/awesome-prisma/generated-sections.json',
        json,
        'utf8',
        () =>
            console.log(
                `Generated ${res.length} sections with ${arrSum(
                    res.map(x => x.collections.length)
                )} collections`
            )
    )
}

main()
