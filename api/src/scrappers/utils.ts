import cheerio from 'cheerio'

interface HTMLNode {
    current: CheerioElement
    children: CheerioStatic
}

export function splitByTag($: CheerioStatic, tag: string): HTMLNode[] {
    const nodes: HTMLNode[] = []
    $(tag).each((i, el) => {
        const htmlChildren: Cheerio = $(el).nextUntil(tag)
        if (htmlChildren) {
            nodes.push({
                current: el,
                children: cheerio.load($.html(htmlChildren)),
            })
        }
    })
    return nodes
}

export const arrSum = (arr: number[]) =>
    arr.reduce((a: number, b: number) => a + b, 0)
