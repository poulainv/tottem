import { DefaultSeo } from 'next-seo'
import App from 'next/app'
import React, { Fragment } from 'react'

// Due to this issue https://github.com/zeit/next.js/issues/6972
// Antdesign style should be imported here instead of component files
import 'antd/es/notification/style/index.css'
import 'antd/es/dropdown/style/index.css'
import 'antd/es/menu/style/index.css'
import 'antd/es/tooltip/style/index.css'
import 'antd/es/select/style/index.css'
import 'antd/es/auto-complete/style/index.css'
import '../index.css'

export default class MyApp extends App {
    componentDidMount() {
        window.$crisp = []
        window.CRISP_WEBSITE_ID = 'eb3965fc-bf93-41a8-9e33-ced5a67b5f43'
        ;(function() {
            var d = document
            var s = d.createElement('script')
            s.src = 'https://client.crisp.chat/l.js'
            s.async = 1
            d.getElementsByTagName('head')[0].appendChild(s)
        })()
    }

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
            </Fragment>
        )
    }
}
