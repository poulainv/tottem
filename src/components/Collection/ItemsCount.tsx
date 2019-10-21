import { Box } from 'grommet'
import * as React from 'react'
import styled from 'styled-components'

const Pictogram = styled.img`
    height: 24px;
    width: 24px;
`

const Counter = styled.p`
    font-size: 12px;
    line-height: 100%;
    margin: 0px;
    color: #595959; // grey-8
`

interface IItemCount {
    type: string
    count: number
}

const ItemCount: React.FC<IItemCount> = ({ type, count }) => {
    return (
        <Box
            direction="row"
            margin={{ horizontal: 'small' }}
            height="36px"
            style={{ position: 'relative' }}
        >
            <Box>
                <Pictogram src={`/pictograms/${type}.svg`} />
            </Box>
            <Box justify="end">
                <Counter>{count}</Counter>
            </Box>
        </Box>
    )
}

const ItemsCount: React.FC<{ items: IItemCount[] }> = props => {
    return (
        <Box direction="row">
            {props.items.map(itemCount => (
                <ItemCount key={itemCount.type} {...itemCount} />
            ))}
        </Box>
    )
}

export default ItemsCount
