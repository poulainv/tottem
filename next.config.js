// to expose ENV variables to the client side
module.exports = {
    webpack: (config, { dev }) => {
        return config
    },
    env: {
        ENV: process.env.ENV,
    },
}
