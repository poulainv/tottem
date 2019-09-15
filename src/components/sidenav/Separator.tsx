import styled from 'styled-components'

const Separator = styled.div`
    width: 43px;
    height: 11px;
    background-color: ${props => props.color || 'black'};
`

export default Separator
