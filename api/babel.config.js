// babel.config.js
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
            '@babel/plugin-proposal-nullish-coalescing-operator',
            '@babel/preset-typescript',
        ],
    ],
}
