// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
    static async getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props} />)
        )
        const styleTags = sheet.getStyleElement()
        return { ...page, styleTags } // return styles collected
    }

    render() {
        return (
            <Html>
                <Head />
                {this.props.styleTags}
                <meta charset="utf-8" />
                <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#000000" />
                <meta property="og:title" content="Tottem" />
                <meta property="og:url" content="htts://tottem.app" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Tottem" />
                <meta property="og:image:width" content="698" />
                <meta property="og:image:height" content="388" />
                <meta
                    property="og:description"
                    content="Knowledge platform for community, it's a place where enthusiastic people and organizations share relevant collections of hand-picked items — books, articles, movies and more."
                />
                <meta
                    property="og:image"
                    content="https://tottem.app/thumbnail.png"
                />
                <meta
                    name="description"
                    content="Knowledge platform for community, it's place where enthusiastic people and organizations share relevant collections of hand-picked items — books, articles, movies and more"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@TottemApp" />
                <link rel="apple-touch-icon" href="" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Poiret+One&display=swap"
                />
                <body
                    style={{
                        margin: 0,
                    }}
                >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
