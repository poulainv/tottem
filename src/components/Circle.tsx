import styled from 'styled-components'

interface CircleProps {
    color: string
    size: string
}

const Circle = styled.div`
    width: ${(props: CircleProps) => (props.size === 'small' ? '8px' : '11px')};
    height: ${(props: CircleProps) =>
        props.size === 'small' ? '8px' : '11px'};
    border-radius: 50%;
    background-color: ${(props: CircleProps) => props.color || 'black'};
`

export default Circle
