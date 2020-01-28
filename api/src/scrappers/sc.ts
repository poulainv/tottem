import cheerio from 'cheerio'
import slugify from 'slugify'
import util from 'util'
import { IItem } from '../interfaces'
import logger from '../logging'
import { inferNewItemFromUrl } from '../parsers'
import { SimpleFetch } from '../parsers/fetchers'

async function getSCItemList($: CheerioStatic) {
    const items: Array<Promise<IItem>> = []
    $('.elli-item').each((index, el) => {
        const productUrl = `https://www.senscritique.com${$(el)
            .find('.elco-title a')
            .attr('href')}`
        logger.info(`Retrieve ${productUrl}`)
        const item = inferNewItemFromUrl(productUrl)
        items.push(item)
    })
    return Promise.all(items)
}

async function getSCList(url: string) {
    const html = await SimpleFetch(url)
    const $ = cheerio.load(html)
    const items = await getSCItemList($)
    return {
        id: slugify($('.elme-listTitle').text()),
        name: $('.elme-listTitle').text(),
        date: new Date($('.lvi-update-paragraph time').attr('datetime')),
        items,
    }
}

const main = async () => {
    const items = await getSCList(
        'https://www.senscritique.com/liste/Lectures_2019/2389404'
    )
    logger.info(util.inspect(items))
}

main()
