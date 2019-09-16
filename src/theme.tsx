import { grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'

const theme = deepMerge(grommet, {
    global: {
        font: {
            family: 'Roboto',
            height: '20px',
            size: '14px',
        },
        colors: {
            brand: '#3F55C9',
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
                // biography mainly
                large: {
                    height: '160%',
                    size: '15px',
                },
            },
        },
    },
})

export default theme
