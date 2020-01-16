const { parsed: localEnv } = require('dotenv').config()
const withGraphql = require('next-plugin-graphql')
const webpack = require('webpack')
const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withGraphql(
    withBundleAnalyzer({
        include: path.resolve(__dirname, './public/pictograms'),
        // to expose ENV variables to the client side
        webpack: (config, { isServer, dev }) => {
            config.plugins.push(
                new webpack.EnvironmentPlugin(localEnv || { ENV: 'prod' })
            )

            // ANT DESIGN
            // used to minimise bundle size by 500KB
            const alias = config.resolve.alias || {}
            alias['@ant-design/icons/lib/dist$'] = path.resolve(
                __dirname,
                './src/components/Icons.js'
            )

            config.resolve.alias = alias
            if (isServer) {
                const antStyles = /antd\/.*?\/style\/css.*?/
                const origExternals = [...config.externals]
                config.externals = [
                    (context, request, callback) => {
                        if (request.match(antStyles)) return callback()
                        if (typeof origExternals[0] === 'function') {
                            origExternals[0](context, request, callback)
                        } else {
                            callback()
                        }
                    },
                    ...(typeof origExternals[0] === 'function'
                        ? []
                        : origExternals),
                ]

                config.module.rules.unshift({
                    test: antStyles,
                    use: 'null-loader',
                })
            }

            config.module.rules.push({
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            icon: true,
                        },
                    },
                ],
            })

            return config
        },

        env: {
            ENV: process.env.NODE_ENV,
            AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
            AUTH0_CLIENTID: process.env.AUTH0_CLIENTID,
            AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
            AUTH0_CALLBACK: process.env.AUTH0_CALLBACK,
            GRAPHQL_URL: process.env.GRAPHQL_URL,
        },
    })
)
