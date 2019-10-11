import React from 'react'
import styled from 'styled-components'

const makeResponsiveComponent = (rulesets, tagName = 'div') =>
    styled(tagName)`
        ${buildStyles(rulesets)}
    `

const buildStyles = rulesets =>
    rulesets.reduce(
        (cssString, { constraint, width, rules }) =>
            `${cssString} @media (${constraint}-width: ${width}) { ${rules} }`,
        ''
    )

export const hideAt = breakpoints => {
    const rulesets = Object.entries(breakpoints).reduce(
        (rulesets, [constraint, width]) => [
            ...rulesets,
            {
                constraint,
                width,
                rules: `display: none;`,
            },
        ],
        []
    )
    return makeResponsiveComponent(rulesets)
}

export const SmallAndDown = hideAt({ min: '812px' })
export const MediumAndDown = hideAt({ min: '1536px' })
export const MediumAndUp = hideAt({ max: '812px' })
export const LargeAndUp = hideAt({ max: '1536px' })
