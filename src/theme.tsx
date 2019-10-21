import { grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'

export const brand50 = '#eef5f3'
export const brand100 = '#d4e6e1'
export const brand200 = '#b7d5ce'
export const brand300 = '#9ac4ba'
export const brand400 = '#85b7ab'
export const brand500 = '#6faa9c'
export const brand600 = '#67a394'
export const brand700 = '#5c998a'
export const brand800 = '#529080'
export const brand900 = '#407f6e'
export const brandA100 = '#d5fff3'
export const brandA200 = '#a2ffe5'
export const brandA400 = '#6fffd7'
export const brandA700 = '#56ffd0'

export const accent50 = '#faeeea'
export const accent100 = '#f3d6cb'
export const accent200 = '#ecbaa8'
export const accent300 = '#e49e85'
export const accent400 = '#de8a6b'
export const accent500 = '#d87551'
export const accent600 = '#d46d4a'
export const accent700 = '#ce6240'
export const accent800 = '#c85837'
export const accent900 = '#bf4527'
export const accentA100 = '#fffdfc'
export const accentA200 = '#ffd3c9'
export const accentA400 = '#ffa996'
export const accentA700 = '#ff947d'

const theme = deepMerge(grommet, {
    tab: {
        border: {
            color: 'dark-2',
            active: {
                color: 'accent-1',
            },
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
    global: {
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
