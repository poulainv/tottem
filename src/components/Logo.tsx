import styled from 'styled-components'

export const Beta = styled.p`
    font-size: 12px;
    position: absolute;
    margin: 0px;
    line-height: 100%;
    top: 0px;
    right: -26px;
`

export const Logo = styled.h1`
    position: relative;
    font-size: 30px;
    color: black;
    font-family: 'Poiret One', Arial, sans-serif;
    font-weight: 700;

    :hover {
        cursor: pointer;
    }

    @media screen and (max-width: 600px) {
        font-size: 24px;
    }
`

export default Logo
