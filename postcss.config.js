module.exports = {
    plugins: {
        tailwindcss: {},
        'postcss-preset-env': {},
        '@fullhuman/postcss-purgecss': {
            content: [
                './src/pages/**/*.{tsx,js}',
                './src/scenes/**/*.{js,tsx}',
                './src/components/**/*.{js,tsx}',
            ],
            whitelistPatterns: [/^(ant)/],
            defaultExtractor: content =>
                content.match(/[A-Za-z0-9-_:/]+/g) || [],
        },
    },
}
