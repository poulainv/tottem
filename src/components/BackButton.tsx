import styled from 'styled-components'

const BackButton = styled.a`
    display: flex;
    background-color: white;
    cursor: pointer;
    color: black;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0px;
    left: -32px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    @media screen and (max-width: 600px) {
        display: none;
    }
`

export { BackButton }
