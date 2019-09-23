import styled from 'styled-components'

interface SeparatorProps {
    color: string
    size: string
}

const Separator = styled.div`
    width: ${(props: SeparatorProps) =>
        props.size === 'small' ? '28px' : '43px'};
    height: ${(props: SeparatorProps) =>
        props.size === 'small' ? '8px' : '11px'};
    background-color: ${props => props.color || 'black'};
`

export default Separator
