import React, { Fragment } from 'react'
import App from 'next/app'
import { DefaultSeo } from 'next-seo'

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <Fragment>
                <DefaultSeo
                    title="Tottem"
                    description="Knowledge platform for community, it's place where enthusiastic people and organizations share relevant collections of hand-picked items — books, articles, movies and more"
                    openGraph={{
                        type: 'website',
                        locale: 'en_en',
                        url: 'htts://tottem.app',
                        site_name: 'Tottem',
                        images: [
                            {
                                width: 698,
                                height: 388,
                                url: 'https://tottem.app/thumbnail.png',
                            },
                        ],
                    }}
                    languageAlternate={{
                        hrefLang: 'fr-fr',
                        href: 'https://tottem.app',
                    }}
                    twitter={{
                        site: '@TottemApp',
                        cardType: 'summary_large_image',
                    }}
                />
                <Component {...pageProps} />
            </Fragment>
        )
    }
}
