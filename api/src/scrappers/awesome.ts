import cheerio from 'cheerio'
import fs from 'fs'
import MardownIt from 'markdown-it'
import emoji from 'node-emoji'
import getUuid from 'uuid-by-string'
import { ICollection, IItem, ISection } from '../interfaces'
import logger from '../logging'
import { inferNewItemFromUrl } from '../parsers'
import { SimpleFetch } from '../parsers/fetchers'
import { arrSum, splitByTag } from './utils'
import slugify from 'slugify'

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
    logger.info(
        `GetAwesome from ${sectionTag} section ${collectionTag} collection`
    )
    // Find different section and group collections inside
    const sections = await Promise.all(
        splitByTag($, sectionTag).map(async ({ current, children }, index) => {
            // Find different collections and group items inside
            const sectionName = getOnlyText($(current))
            const collections: ICollection[] = await getCollections(
                children,
                collectionTag,
                itemTag,
                shouldCreateDefaultCollection,
                sectionName
            )

            const collectionWithItems = collections.filter(x => x.items.length)
            logger.info(
                `Section found ${sectionName} with ${collectionWithItems.length} collections`
            )
            return {
                id: getUuid(sectionName),
                name: emoji.emojify(sectionName, () => ''),
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
    shouldCreateDefaultCollection: boolean,
    fromSectionName: string
) {
    const collections: Array<Promise<ICollection>> = splitByTag(
        $,
        collectionTag
    ).map(async collection => {
        const collectionName = $(collection.current)
            .text()
            .trim()
        const items = (await getItems(collection.children, itemTag)).filter(
            result => !(result instanceof Error)
        )
        logger.info(
            `Collection found ${collectionName} with ${items.length} items`
        )
        return {
            id: getUuid(fromSectionName + collectionName),
            date: new Date(),
            name: emoji.emojify(collectionName, () => ''),
            items,
        }
    })

    // Create default collection when items are directly in sections
    if (shouldCreateDefaultCollection) {
        logger.debug(`Lookup in section for items without collection`)
        const items = await getItems($, itemTag)
        collections.push(
            Promise.resolve({
                // id section or collection name id changed. FIXME based on index?
                id: getUuid(fromSectionName + 'General'),
                date: new Date(),
                name: 'General',
                items: items.filter(result => !(result instanceof Error)),
            })
        )
    }
    return Promise.all(collections)
}

export async function mergeNativeAndFetchedInfos(
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
    logger.debug(`Items found: ${items.length} corresponding to ${tag}`)
    return Promise.all(
        items.map(p =>
            p.catch(e => {
                // logger.error(e)
                return e
            })
        )
    )
}

export function getOnlyText(el: Cheerio) {
    return el
        .clone()
        .children()
        .remove()
        .end()
        .text()
        .replace('-', '')
        .trim()
}

export function getNativeContent(el: Cheerio) {
    return {
        productUrl: el.children('a').attr('href') || el.attr('href'),
        title: getOnlyText(el),
    }
}

async function launchAwesome(
    name: string,
    url: string,
    sectionTag: string,
    collectionTag: string,
    itemTag: string,
    shouldCreateDefaultCollection: boolean
) {
    const md = MardownIt()
    const githubMd = await SimpleFetch(url)
    const awesomeHtml = md.render(githubMd)
    const $ = cheerio.load(awesomeHtml)
    const res = await getAwesome(
        $,
        sectionTag,
        collectionTag,
        itemTag,
        shouldCreateDefaultCollection
    )
    const json = JSON.stringify(res)
    fs.writeFile(
        `/Users/vincentpoulain/Development/quiet/src/data/${name}/generated-sections.json`,
        json,
        'utf8',
        () =>
            logger.info(
                `Generated ${res.length} sections with ${arrSum(
                    res.map(x => x.collections.length)
                )} collections`
            )
    )
}

const launchPrisma = async () => {
    await launchAwesome(
        'awesome-prisma',
        'https://raw.githubusercontent.com/catalinmiron/awesome-prisma/master/readme.md',
        'h2',
        'h3',
        'li a',
        true
    )
}

const launchNextjs = async () => {
    await launchAwesome(
        'awesome-nextjs',
        'https://raw.githubusercontent.com/catalinmiron/awesome-prisma/master/readme.md',
        'h2',
        'h3',
        'li a',
        true
    )
}
const launchPython = async () => {
    await launchAwesome(
        'awesome-python',
        'https://raw.githubusercontent.com/vinta/awesome-python/master/README.md',
        'h1',
        'h2',
        'li a',
        true
    )
}

const launchCSS = async () => {
    await launchAwesome(
        'awesome-css-learning',
        'https://raw.githubusercontent.com/micromata/awesome-css-learning/master/readme.md',
        'h1',
        'h2, h3',
        'li',
        false
    )
}

launchCSS()
