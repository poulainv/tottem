import cheerio from 'cheerio'
import {
    getAwesome,
    getNativeContent,
    AwesomeItem,
    mergeNativeAndFetchedInfos,
    getOnlyText,
} from '../src/scrappers/awesome'
import { splitByTag } from '../src/scrappers/utils'
import { IItem } from '../src/interfaces'

const awesomeMarkdnow = `

# Hello to an Awesome MD

This is a test data

# Suggesting curation of content

Dont hesitate to contribute

## Best content 1

### Subheader A

- :hammer: [How to 1](https://www.howtographql-1.com/)
- :hammer: [How to 2](https://www.howtographql-2.com/)

### Subheader B

- :hammer: [How to 3](https://www.howtographql-3.com/)
- :hammer: [How to 4](https://www.howtographql-4.com/)


## Best content 2

### Subheader C

- :hammer: [How to 5](https://www.howtographql-5.com/)
- :hammer: [How to 6](https://www.howtographql-6.com/)

## Licence

Yoo
`

const awesomeHtml = `
<h1>Hello to an Awesome MD</h1>
<p>This is a test data</p>

<h1>Suggesting curation of content</h1>
<p>Dont hesitate to contribute</p>
<h2>Best content 1</h2>
<h3>Subheader A</h3>
<ul>
<li>:hammer: <a href="https://www.howtographql-1.com/">How to 1</a></li>
<li>:hammer: <a href="https://www.howtographql-2.com/">How to 2</a></li>
</ul>
<h3>Subheader B</h3>
<ul>
<li>:hammer: <a href="https://www.howtographql-3.com/">How to 3</a></li>
<li>:hammer: <a href="https://www.howtographql-4.com/">How to 4</a></li>
</ul>
<h2>Best content 2</h2>
<h3>Subheader C</h3>
<ul>
<li>:hammer: <a href="https://www.howtographql-5.com/">How to 5</a></li>
<li>:hammer: <a href="https://www.howtographql-6.com/">How to 6</a></li>
</ul>
<h2>Licence</h2>
<p>Yoo</p>

`

const expected1 = [
    {
        name: 'Best content 1',
        collections: [
            {
                name: 'Subheader A',
                items: [
                    {
                        title: 'How to 1',
                        productUrl: 'https://www.howtographql-1.com/',
                    },
                    {
                        title: 'How to 2',
                        productUrl: 'https://www.howtographql-2.com/',
                    },
                ],
            },
            {
                name: 'Subheader B',
                items: [
                    {
                        title: 'How to 3',
                        productUrl: 'https://www.howtographql-3.com/',
                    },
                    {
                        title: 'How to 4',
                        productUrl: 'https://www.howtographql-4.com/',
                    },
                ],
            },
        ],
    },
    {
        name: 'Best content 2',
        collections: [
            {
                name: 'Subheader C',
                items: [
                    {
                        title: 'How to 5',
                        productUrl: 'https://www.howtographql-5.com/',
                    },
                    {
                        title: 'How to 6',
                        productUrl: 'https://www.howtographql-6.com/',
                    },
                ],
            },
        ],
    },
]

// describe('split file into relevant section & collection', () => {
//     test('first', () => {
//         const $ = cheerio.load(awesomeHtml)
//         const actual = getAwesome($, 'h2', 'h3', 'li a')
//         expect(actual).toEqual(expected1)
//     })
// })

describe('getItems should retrieve right item infos', () => {
    test('when title in link tag', () => {
        const html = `<ul><li>:hammer: <a href="https://www.howtographql-1.com/">How to 1</a></li></ul>`
        const $ = cheerio.load(html)
        const actual = getNativeContent($('li a').first())
        const expected = {
            title: 'How to 1',
            productUrl: 'https://www.howtographql-1.com/',
        }
        expect(actual).toEqual(expected)
    })

    test('when title in li tag', () => {
        const html = `<ul><li><a href="https://www.howtographql-1.com/">How to 1</a> - First Title </li></ul>`
        const $ = cheerio.load(html)
        const actual = getNativeContent($('li').first())
        const expected = {
            title: 'First Title',
            productUrl: 'https://www.howtographql-1.com/',
        }
        expect(actual).toEqual(expected)
    })
})

describe('splitByTag should split HTML nodes by given tag', () => {
    test('when tag is simple', () => {
        const html = `<h1> <p>Foo</p> </h1> <h1> <p>Bar</p> </h1>`
        const $ = cheerio.load(html)
        const actual = splitByTag($, 'h1')
        expect(actual).toHaveLength(2)
        expect(actual[0].current.name).toEqual('h1')
        expect(actual[1].current.name).toEqual('h1')
    })

    test('when tag is multiple', () => {
        const html = `<h1> <p>Foo</p> </h1> <h2> <p>Bar</p> </h2>`
        const $ = cheerio.load(html)
        const actual = splitByTag($, 'h1, h2')
        expect(actual).toHaveLength(2)
        expect(actual[0].current.name).toEqual('h1')
        expect(actual[1].current.name).toEqual('h2')
    })
})

describe('mergeNativeAndFetchedInfos should merge item', () => {
    test('with native content priority', async () => {
        const native: AwesomeItem = {
            title: 'foo',
            author: 'bar',
            productUrl: 'quz',
        }
        const inferredItem: Promise<IItem> = Promise.resolve({
            title: '',
            author: '',
            type: 'website',
            productUrl: '',
        })
        const actual = await mergeNativeAndFetchedInfos(inferredItem, native)
        const expected = {
            title: 'foo',
            author: 'bar',
            productUrl: 'quz',
            type: 'website',
        }
        expect(actual).toEqual(expected)
    })
})

describe('getOnlyTest should remove other node html', () => {
    test('nested nodes', async () => {
        const html = `<h1> Foo <a>Bar</a> </h1>`
        const $ = cheerio.load(html)
        const actual = getOnlyText($('h1'))
        expect(actual).toEqual('Foo')
    })
})
