import { grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'
import { brand500 } from './constants/colors'

const theme = deepMerge(grommet, {
    text: {
        medium: {
            size: '16px',
        },
    },
    collapsible: {
        minSpeed: 350,
    },
    icon: {
        size: {
            small: '15px',
        },
    },
    button: {
        padding: {
            vertical: '5px',
            horizontal: '5px',
        },
        primary: {
            color: 'brand',
        },
        color: { dark: 'accent-1', light: 'accent-1' },
        border: {
            width: '0px',
            radius: '10px',
            color: { dark: 'white', light: 'white' },
        },
        extend: {
            'font-weight': '500',
            'font-size': '16px',
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
    anchor: {
        fontWeight: undefined,
        hover: {
            textDecoration: 'none',
        },
    },
    global: {
        animation: { duration: '0.1s' },
        focus: {
            border: {
                color: 'transparent',
            },
        },
        colors: {
            'accent-1': '#D87551',
            brand: brand500,
            'light-1': 'rgb(250, 250, 250)',
        },
        elevation: {
            light: {
                profile: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            },
        },
        font: {
            family:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
        },
        breakpoints: {
            small: {
                value: 812,
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
        level: {
            1: {
                font: {
                    weight: '700',
                },
                // Firstname desktop
                large: {
                    size: '28px',
                    height: '36px',
                },
                small: {
                    size: '16px',
                },
            },
            2: {
                font: {
                    weight: '700',
                },
                // Firstname mobile
                large: {
                    size: '20px',
                    height: '24px',
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
                    size: '18px',
                    height: '22px',
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
                    size: '16px',
                    height: '20px',
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
