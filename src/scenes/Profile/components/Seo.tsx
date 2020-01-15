import { NextSeo } from 'next-seo'
import * as React from 'react'

export interface ISeoProps {
    profileSlug: string
    firstname: string
    biography?: string
    avatar: string
    sectionSlug: string
}

export function Seo({
    profileSlug,
    firstname,
    biography,
    avatar,
    sectionSlug,
}: ISeoProps) {
    return (
        <NextSeo
            title={`${firstname} - Tottem`}
            description={`${firstname} on Tottem - ${biography}`}
            canonical={`https://tottem.app/${profileSlug}/${sectionSlug}`}
            twitter={{
                site: '@TottemApp',
                cardType: 'summary',
            }}
            openGraph={{
                type: 'profile',
                profile: {
                    username: profileSlug,
                },
                description: `${firstname} on Tottem - ${biography}`,
                url: `https://tottem.app/${profileSlug}`,
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
