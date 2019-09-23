import { grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'

const theme = deepMerge(grommet, {
    tab: {
        color: 'dark-1',
        border: {
            size: '0px',
        },
    },
    tabs: {
        header: {
            extend: {
                'overflow-x': 'auto',
                'flex-wrap': 'nowrap',
                '::-webkit-scrollbar': {
                    display: 'none',
                },
            },
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
        focus: {
            border: {
                color: 'white',
            },
        },
        colors: {
            brand: '#3F55C9',
            'accent-1': '#FFCA4F',
        },
        elevation: {
            light: {
                profile: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                card: '2px 10px 20px rgba(0, 0, 0, 0.1)',
            },
        },
        font: {
            family:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";ﬂ',
        },
        breakpoints: {
            small: {
                edgeSize: {
                    card: '12px',
                },
            },
        },
        edgeSize: {
            card: '17px',
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
                    weight: '600',
                },
                // Firstname desktop
                large: {
                    size: '42px',
                },
                small: {
                    size: '16px',
                },
            },
            2: {
                font: {
                    weight: '600',
                },
                // Firstname mobile
                large: {
                    size: '28px',
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
                    maxWidth: '858px', // avoid collection name truncation
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
