import { DefaultSeo } from 'next-seo'
import App from 'next/app'
import React, { Fragment } from 'react'
import { GlobalCustomStyle } from '../scenes/styles'

// Due to this issue https://github.com/zeit/next.js/issues/6972
// Antdesign style should be imported here instead of component files
import 'antd/es/notification/style/index.css'
import 'antd/es/button/style/index.css'

export default class MyApp extends App {
    render() {
        const { Component, pageProps, router } = this.props
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
                <Component {...pageProps} key={router.route} />
                <GlobalCustomStyle />
            </Fragment>
        )
    }
}
