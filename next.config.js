const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

// to expose ENV variables to the client side
module.exports = {
    webpack: (config, { dev }) => {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
        return config
    },
    env: {
        ENV: process.env.ENV,
        AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
        AUTH0_CLIENTID: process.env.AUTH0_CLIENTID,
    },
}
