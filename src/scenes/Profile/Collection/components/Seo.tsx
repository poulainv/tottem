import { NextSeo } from 'next-seo'
import * as React from 'react'

export interface ISeoProps {
    profileSlug: string
    collectionName?: string
    collectionSlug: string
    avatar: string
}

export function Seo({
    profileSlug,
    collectionName,
    collectionSlug,
    avatar,
}: ISeoProps) {
    return (
        <NextSeo
            title={`${collectionName || 'New Collection'} - Tottem`}
            description={`${collectionName ||
                'New Collection'} on Tottem by ${profileSlug}`}
            canonical={`https://tottem.app/${profileSlug}/c/${collectionSlug}`}
            twitter={{
                site: '@TottemApp',
                cardType: 'summary',
            }}
            openGraph={{
                description: `${collectionName} on Tottem by ${profileSlug}`,
                url: `https://tottem.app/${profileSlug}/c/${collectionSlug}`,
                site_name: 'Tottem',
                images: [
                    {
                        url: `https://tottem.app${avatar}`,
                    },
                ],
            }}
        />
    )
}
