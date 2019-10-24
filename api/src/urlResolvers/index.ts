import cheerio from 'cheerio'
import fetch from 'node-fetch'

export const getInfos = (url: string) => {
    fetch(url)
        .then(res => res.text())
        .then(body => {
            const html = cheerio.load(body)
            console.log(html('title').text())
        })
}
