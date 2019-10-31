import { getGithubId, getYoutubeId } from '../src/parsers/fetchers'

describe('Extract username & repository from github url', () => {
    test('with normal repo name', () => {
        const actual = getGithubId('https://github.com/poulainv/tottem')
        expect(actual).toEqual({ username: 'poulainv', repos: 'tottem' })
    })

    test('with special char name ', () => {
        const actual = getGithubId('https://github.com/foo-bar/quz')
        expect(actual).toEqual({ username: 'foo-bar', repos: 'quz' })
    })

    test('with specific url tree', () => {
        const actual = getGithubId(
            'https://github.com/foo-bar/quz/tree/master/commit'
        )
        expect(actual).toEqual({ username: 'foo-bar', repos: 'quz' })
    })

    test("raises if any one's missing", () => {
        expect(() => {
            getGithubId('https://github.com/foo-ba/')
        }).toThrow()
    })
})

describe('Extract youtube id from youtube url', () => {
    test('with normal youtube name', () => {
        const actual = getYoutubeId(
            'https://www.youtube.com/watch?v=ar9qA3WJInk&list=RDoq2Oq1J6t70&index=2'
        )
        expect(actual).toEqual('ar9qA3WJInk')
    })

    test('with youtube tiny', () => {
        const actual = getYoutubeId('https://www.youtu.be/foo')
        expect(actual).toEqual('foo')
    })

    test('raises if v parameter is missing', () => {
        expect(() => {
            getYoutubeId(
                'https://www.youtube.com/watch?list=RDoq2Oq1J6t70&index=2'
            )
        }).toThrow()
    })

    test('raises if tinyurl is not enought tiny', () => {
        expect(() => {
            getYoutubeId('https://www.youtu.be/foo/bar')
        }).toThrow()
    })
})
