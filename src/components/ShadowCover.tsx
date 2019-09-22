import styled from 'styled-components'

const ShadowCover = styled.div`
    box-shadow: 1px 6px 25px 0 ${props => props.color || 'grey'};
    border-radius: 50%;
    height: 7px;
    width: 80px;
    margin-top: -10px;
`
export default ShadowCover
