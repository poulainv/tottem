import fetch from 'node-fetch'

/* -------- FETCHERS DEFINITION --------  */

export function SimpleFetch(url: string): Promise<string> {
    return fetch(url, {
        // Some website check useragent
        headers: {
            'User-Agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36',
        },
    }).then(res => res.text())
}

export function GithubApiFetch(url: string): Promise<string> {
    console.log(`Fetch github api: ${url}`)
    // FIXME regex group
    const parts = url.split('/')
    const username = parts[3]
    const repos = parts[4]
    return fetch(`https://api.github.com/repos/${username}/${repos}`, {
        headers: {
            Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
    }).then(res => res.text())
}
