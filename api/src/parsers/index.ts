import emoji from 'node-emoji'
import { ItemType } from '@generated/photon'
import cheerio from 'cheerio'
import URL from 'url'
import { IItem } from '../interfaces'
import { GithubApiFetch, SimpleFetch, YoutubeApiFetch } from './fetchers'
import logger from '../logging'

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
        imageUrl: json.owner.avatar_url,
        meta: {
            starsCount: json.stargazers_count,
            forksCount: json.forks_count,
            watchersCount: json.watchers_count,
            issuesCount: json.open_issues,
            pushedAt: json.pushed_at,
        },
    }
}

export function YoutubeApiParser(url: string, body: string): IItem {
    const json = JSON.parse(body)
    const item = json.items[0]
    return {
        title: item.snippet.title,
        author: item.snippet.channelTitle,
        productUrl: url,
        description: item.snippet.description,
        provider: 'youtube',
        type: 'video' as ItemType,
        imageUrl: item.snippet.thumbnails.high.url,
        meta: {
            viewCount: item.statistics.viewCount,
            likeCount: item.statistics.likeCount,
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
        type: kind as ItemType, // kind is not correctly typed
        description: $('.pvi-productDetails-resume').text(),
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
            $('meta[name="author"]').attr('content') ||
            $('meta[name="twitter:creator"]').attr('content') ||
            $('meta[property="og:site_name"]').attr('content') ||
            $('meta[name="application-name"]').attr('content')

        const imageUrl =
            $('meta[name="twitter:image:src"]').attr('content') ||
            $('meta[name="twitter:image"]').attr('content') ||
            $('meta[property="og:image"]').attr('content') ||
            ($('link[rel="apple-touch-icon"]').attr('href') &&
                withDomain(url, $('link[rel="apple-touch-icon"]').attr('href')))
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

const withDomain = (baseUrl: string, url: string) => {
    if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
        return url
    } else {
        return `${URL.parse(baseUrl).host}/${url}`
    }
}

const emojify = (item: IItem) => {
    return {
        ...item,
        title: item.title && emoji.emojify(item.title, () => ''),
        author: item.author && emoji.emojify(item.author, () => ''),
        description:
            item.description && emoji.emojify(item.description, () => ''),
    }
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
    {
        name: 'TinyYoutubeApi',
        regex: /^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?youtube\.com(\/.*)?$/,
        parse: YoutubeApiParser,
        fetch: YoutubeApiFetch,
    },
    {
        name: 'YoutubeApi',
        regex: /^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?youtu\.be(\/\w{1,}){1}?$/,
        parse: YoutubeApiParser,
        fetch: YoutubeApiFetch,
    },
]

export async function inferNewItemFromUrl(url: string): Promise<IItem> {
    const Parser = Parsers.find(x => x.regex.test(url)) || FallbackParser
    logger.debug(`Use parser ${Parser.name} for ${url}`)
    try {
        const body = await Parser.fetch(url)
        const inferredItem = await Parser.parse(url, body)
        return emojify(trim(inferredItem))
    } catch (err) {
        if (err.message.includes('Only absolute URLs are supported')) {
            logger.info(`Url skipped because not absolute ${url}`)
        } else {
            logger.error(`Err with ${url} ${err}`, err)
        }
        throw Error(`Something went wrong when parsing ${url}`)
    }
}
