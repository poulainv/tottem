import React from 'react'
import styled from 'styled-components'
import { brand300, brand400, brand600, brand900 } from '../../constants/colors'

interface IButton {
    primary?: boolean
}

export const StyledButton = styled.button`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
    color: ${(props: IButton) => (props.primary ? 'white' : brand600)};
    border: 1px
        ${(props: IButton) => (props.primary ? 'transparent' : brand300)} solid;
    background-color: ${(props: IButton) =>
        props.primary ? brand600 : 'white'};
    text-decoration: none;
    border-radius: 3px;
    padding: 8px 8px 8px 8px;
    font-weight: 500;
    margin: 0px;
    font-size: 14px;

    :hover {
        cursor: pointer;
        border: 1px ${brand400} solid;
        color: ${(props: IButton) => (props.primary ? 'white' : brand900)};
        background-color: ${(props: IButton) =>
            props.primary ? brand400 : 'white'};
    }

    @media screen and (max-width: 812px) {
        font-size: 12px;
    }
`
