import { grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'

const theme = deepMerge(grommet, {
    tab: {
        color: 'dark-1',
        border: {
            size: '0px',
        },
    },
    button: {
        color: { dark: 'white', light: 'white' },
        border: {
            width: '1px',
            color: { dark: 'white', light: 'white' },
        },
        extend: {
            font: {
                family: 'Work Sans',
            },
            'font-size': '13px',
        },
    },
    // Increase maxWidth to avoid too small paragraph
    paragraph: {
        small: {
            maxWidth: '380px',
        },
        medium: {
            maxWidth: '380px',
        },
    },
    global: {
        colors: {
            brand: '#3F55C9',
            'accent-1': '#FFCA4F',
        },
        elevation: {
            light: {
                card: '0px 12px 24px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    heading: {
        font: {
            family: 'Work Sans',
            weight: '500',
        },
        level: {
            1: {
                font: {
                    weight: '700',
                },
                // Hello desktop
                large: {
                    size: '48px',
                },
                small: {
                    size: '16px',
                },
            },
            2: {
                font: {
                    weight: '700',
                },
                // Hello mobile
                large: {
                    size: '36px',
                    height: '42px',
                },
                small: {
                    size: '13px',
                },
            },
            3: {
                font: {
                    weight: '400',
                },
                medium: {
                    size: '22px',
                    maxWidth: '858px', // avoid collection name truncation
                },
                xsmall: {
                    size: '14px',
                    height: '18px',
                },
            },
            4: {
                font: {
                    weight: '400',
                },
                medium: {
                    size: '18px',
                },
                xsmall: {
                    size: '12px',
                    height: '14px',
                },
            },
        },
    },
})

export default theme
