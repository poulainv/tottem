const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
    // to expose ENV variables to the client side
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.EnvironmentPlugin(localEnv || { ENV: 'prod' })
        )
        return config
    },

    env: {
        ENV: process.env.ENV,
        AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
        AUTH0_CLIENTID: process.env.AUTH0_CLIENTID,
        AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    },
})
