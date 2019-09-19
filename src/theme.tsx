import { grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'

const theme = deepMerge(grommet, {
    tab: {
        color: 'dark-1',
        active: {
            color: 'accent-1',
        },
        border: {
            active: {
                color: {
                    light: 'accent-1',
                    dark: 'accent-1',
                },
                size: '4px',
            },
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
    tabs: {
        header: {
            extend: `background-color: white;`,
        },
    },
    global: {
        font: {
            family: 'Roboto',
            height: '20px',
            size: '14px',
        },
        colors: {
            brand: '#3F55C9',
            'accent-1': '#FFCA4F',
        },
        size: {
            xmedium: '296px',
            xxlarge: '1272px',
            large: '800px',
        },
        elevation: {
            light: {
                card: '0px 12px 24px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    heading: {
        level: {
            '1': {
                font: {
                    family: 'Work Sans',
                    weight: '700',
                },
                tab: {
                    size: '16px',
                },
                medium: {
                    height: '150%',
                    size: '48px',
                },
            },
            '2': {
                font: {
                    family: 'Work Sans',
                    weight: '400',
                },
                medium: {
                    height: '150%',
                    size: '22px',
                },
                large: {
                    height: '150%',
                    size: '24px',
                },
            },
            '3': {
                font: {
                    family: 'Work Sans',
                    weight: '500',
                },
                medium: {
                    height: '150%',
                    size: '14px',
                },
                tab: {
                    height: '150%',
                    size: '14px',
                },
                // biography mainly
                large: {
                    height: '160%',
                    size: '16px',
                },
            },
        },
    },
})

export default theme
