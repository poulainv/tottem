import styled from 'styled-components'

const Logo = styled.h1`
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
