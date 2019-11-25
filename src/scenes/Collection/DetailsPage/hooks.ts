import { useGetCollectionPageQuery } from '../../../generated/types'

const useCollection = (profile: string, collectionId: string) => {
    const isBrowser = typeof window !== 'undefined'

    return useGetCollectionPageQuery({
        ssr: true,
        returnPartialData: isBrowser,
        variables: {
            slug: profile,
            collectionId,
        },
    })
}

export { useCollection }
