import cheerio from 'cheerio'
import fetch from 'node-fetch'
import URL from 'url'
import { ItemType } from '@generated/photon'

export interface InferredItem {
    title: string
    productUrl: string
    imageUrl?: string
    author: string
    type: ItemType
}

function FnacParser(url: string, body: string): InferredItem {
    const $ = cheerio.load(body)
    return {
        title: $('.f-productHeader-Title')
            .text()
            .trim(),
        author:
            $('.authorStrate__name')
                .first()
                .text()
                .trim() ||
            $('.characteristicsDashboard__definition')
                .first()
                .text()
                .trim(),
        productUrl: url,
        type: 'book' as ItemType,
        imageUrl: $('.js-ProductVisuals-imagePreview').attr('src'),
    }
}

function MediumParser(url: string, body: string): InferredItem {
    const $ = cheerio.load(body)
    return {
        title: $('meta[property="og:title"]').attr('content'),
        author: $('meta[name="author"]').attr('content'),
        productUrl: url,
        type: 'article' as ItemType,
        imageUrl: $('meta[property="og:image"]').attr('content'),
    }
}

function BabelioParser(url: string, body: string): InferredItem {
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

function SCParser(url: string, body: string): InferredItem {
    const $ = cheerio.load(body)
    const kind = url.split('.com/')[1].split('/')[0]
    const headers = $('title')
        .text()
        .split(' - ')
    return {
        title: headers[0].trim(),
        author:
            $('span[itemprop="creator"]')
                .text()
                .trim() ||
            $('span[itemprop="director"]')
                .text()
                .trim(),
        productUrl: url,
        type: kind as ItemType,
        imageUrl: $('.lightview ').attr('href'),
    }
}

const FallbackParser = {
    regex: '*',
    parse: (url: string, body: string): InferredItem => {
        const $ = cheerio.load(body)
        const header = $('title').text()
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
            title: header.trim(),
            author: author.trim(),
            productUrl: url,
            type: 'website' as ItemType,
            imageUrl,
        }
    },
}

const Parsers: Array<{
    regex: RegExp
    parse: (url: string, body: string) => InferredItem
}> = [
    {
        regex: /^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?babelio\.com(\/.*)?$/,
        parse: BabelioParser,
    },
    {
        regex: /^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?senscritique\.com(\/.*)?$/,
        parse: SCParser,
    },
    {
        regex: /^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?medium\.com(\/.*)?$/,
        parse: MediumParser,
    },
    {
        regex: /^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?livre.fnac\.com(\/.*)?$/,
        parse: FnacParser,
    },
]

const options = {
    // Some website check useragent
    headers: {
        'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36',
    },
}

export function inferNewItemFromUrl(url: string): Promise<InferredItem> {
    return fetch(url, options)
        .then(res => res.text())
        .then(body => {
            const Parser =
                Parsers.find(x => x.regex.test(url)) || FallbackParser
            console.log(`Use parser ${Parser.regex}`)
            return Parser.parse(url, body)
        })
}
