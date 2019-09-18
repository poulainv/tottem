import styled from 'styled-components'

const Circle = styled.div`
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${props => props.color || 'black'};
`

export default Circle
