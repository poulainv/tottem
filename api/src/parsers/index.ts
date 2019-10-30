import { ItemType } from '@generated/photon'
import cheerio from 'cheerio'
import URL from 'url'
import { IItem } from '../interfaces'
import { GithubApiFetch, SimpleFetch } from './fetchers'

/* -------- PARSERS DEFINITION --------  */
function FnacParser(url: string, body: string): IItem {
    const $ = cheerio.load(body)
    return {
        title: $('.f-productHeader-Title').text(),
        author:
            $('.authorStrate__name')
                .first()
                .text() ||
            $('.characteristicsDashboard__definition')
                .first()
                .text(),
        productUrl: url,
        type: 'book' as ItemType,
        imageUrl: $('.js-ProductVisuals-imagePreview').attr('src'),
    }
}

function MediumParser(url: string, body: string): IItem {
    const $ = cheerio.load(body)
    return {
        title: $('meta[property="og:title"]').attr('content'),
        author: $('meta[name="author"]').attr('content'),
        provider: 'medium',
        productUrl: url,
        type: 'article' as ItemType,
        imageUrl: $('meta[property="og:image"]').attr('content'),
    }
}

export function GithubApiParser(url: string, body: string): IItem {
    const json = JSON.parse(body)
    return {
        title: json.name,
        author: json.full_name,
        productUrl: url,
        description: json.description,
        provider: 'github',
        type: 'repository' as ItemType,
        imageUrl: undefined,
        meta: {
            starsCount: json.stargazers_count,
            forksCount: json.forks_count,
            watchersCount: json.watchers_count,
            issuesCount: json.open_issues,
        },
    }
}

function BabelioParser(url: string, body: string): IItem {
    const $ = cheerio.load(body)
    const headers = $('title')
        .text()
        .split(' - ')
    return {
        title: headers[0],
        author: headers[1],
        productUrl: url,
        type: 'book' as ItemType,
        imageUrl: $('meta[property="og:image"]').attr('content'),
    }
}

function SCParser(url: string, body: string): IItem {
    const $ = cheerio.load(body)
    const kind = url.split('.com/')[1].split('/')[0]
    const headers = $('title')
        .text()
        .split(' - ')
    return {
        title: headers[0],
        author:
            $('span[itemprop="creator"]').text() ||
            $('span[itemprop="director"]').text(),
        productUrl: url,
        type: kind as ItemType,
        imageUrl: $('.lightview ').attr('href'),
    }
}

const FallbackParser = {
    regex: '*',
    name: 'Fallback',
    fetch: SimpleFetch,
    parse: (url: string, body: string): IItem => {
        const $ = cheerio.load(body)
        const header = $('title').text()
        const description =
            $('meta[name="description"]').attr('content') ||
            $('meta[property="og:description"]').attr('content')
        const author =
            $('meta[name="twitter:creator"]').attr('content') ||
            $('meta[property="og:site_name"]').attr('content') ||
            $('meta[name="application-name"]').attr('content')

        const imageUrl =
            $('meta[name="twitter:image:src"]').attr('content') ||
            $('meta[property="og:image"]').attr('content') ||
            `${URL.parse(url).host}/${$('link[rel="apple-touch-icon"]').attr(
                'href'
            )}`
        return {
            title: header,
            description,
            author,
            productUrl: url,
            type: 'website' as ItemType,
            imageUrl,
        }
    },
}

const trim = (item: IItem) => {
    return {
        ...item,
        title: item.title && item.title.trim(),
        author: item.author && item.author.trim(),
        description: item.description && item.description.trim(),
    }
}

const Parsers: Array<{
    regex: RegExp
    name: string
    fetch: (url: string) => Promise<string>
    parse: (url: string, body: string) => IItem
}> = [
    {
        name: 'Babelio',
        regex: /^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?babelio\.com(\/.*)?$/,
        parse: BabelioParser,
        fetch: SimpleFetch,
    },
    {
        name: 'SC',
        regex: /^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?senscritique\.com(\/.*)?$/,
        parse: SCParser,
        fetch: SimpleFetch,
    },
    {
        name: 'Medium',
        regex: /^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?medium\.com(\/.*)?$/,
        parse: MediumParser,
        fetch: SimpleFetch,
    },
    {
        name: 'Fnac',
        regex: /^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?livre.fnac\.com(\/.*)?$/,
        parse: FnacParser,
        fetch: SimpleFetch,
    },
    {
        name: 'GithubApi',
        regex: /^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?github\.com(\/.{1,}){2,}?$/,
        parse: GithubApiParser,
        fetch: GithubApiFetch,
    },
]

export async function inferNewItemFromUrl(url: string): Promise<IItem> {
    const Parser = Parsers.find(x => x.regex.test(url)) || FallbackParser
    console.log(`Use parser ${Parser.name}`)
    try {
        const body = await Parser.fetch(url)
        const inferredItem = await Parser.parse(url, body)
        return trim(inferredItem)
    } catch (err) {
        console.log(`Err with ${url} ${err}`)
        throw Error(`Something went wrong when parsing ${url}`)
    }
}
