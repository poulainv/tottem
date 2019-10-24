import cheerio from 'cheerio'
import fetch from 'node-fetch'
import { NewItem } from '../types'

export interface NewItem {
    title: string
    productUrl: string
    imageUrl: string
    author: string
    type: string
}

function FnacParser(url: string, body: string): NewItem {
    const $ = cheerio.load(body)
    return {
        title: $('.f-productHeader-Title').text(),
        author: $('.characteristicsDashboard__definition')
            .first()
            .text()
            .trim(),
        productUrl: url,
        type: 'book',
        imageUrl: $('.js-ProductVisuals-imagePreview').attr('src'),
    }
}
function MediumParser(url: string, body: string): NewItem {
    const $ = cheerio.load(body)
    return {
        title: $('meta[property="og:title"]').attr('content'),
        author: $('meta[name="author"]').attr('content'),
        productUrl: url,
        type: 'article',
        imageUrl: $('meta[property="og:image"]').attr('content'),
    }
}

function BabelioParser(url: string, body: string): NewItem {
    const $ = cheerio.load(body)
    const headers = $('title')
        .text()
        .split(' - ')
    return {
        title: headers[0],
        author: headers[1],
        productUrl: url,
        type: 'book',
        imageUrl: $('meta[property="og:image"]').attr('content'),
    }
}

function SCParser(url: string, body: string): NewItem {
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
        type: kind,
        imageUrl: $('.lightview ').attr('href'),
    }
}

const Parsers: Array<{
    regex: RegExp
    parse: (url: string, body: string) => NewItem
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
]

export function inferNewItemFromUrl(
    url: string | null | undefined
): Promise<NewItem> {
    if (!url) {
        return Promise.reject()
    }
    return fetch(url)
        .then(res => res.text())
        .then(body => {
            const Parser = Parsers.find(x => x.regex.test(url))
            if (!Parser) {
                console.log(`No parser found for ${url}`)
                return Promise.reject()
            }
            console.log(`Use parser ${Parser.regex}`)
            return Parser.parse(url, body)
        })
}
