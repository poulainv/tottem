import styled from 'styled-components'

const ShadowCover = styled.div`
    box-shadow: 1px 6px 25px 0px ${props => props.color || 'grey'};
    border-radius: 50%;
    height: 7px;
    width: 80px;
`
export default ShadowCover
