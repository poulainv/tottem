import { Box } from 'grommet'
import * as React from 'react'
import styled from 'styled-components'
import { ItemType } from '../../common'

const Pictogram = styled.img`
    height: 24px;
    width: 24px;

    @media screen and (max-width: 600px) {
        height: 20px;
        width: 20px;
    }
`

const Counter = styled.p`
    font-size: 12px;
    line-height: 100%;
    margin: 0px;
    color: #595959; // grey-8

    @media screen and (max-width: 600px) {
        font-size: 12px;
    }
`

const ItemCountBox = styled(Box)`
    position: relative;
    height: 36px;

    @media screen and (max-width: 600px) {
        height: 32px;
    }
`

interface IItemCount {
    type: string
    count: number
}

const ItemCount: React.FC<IItemCount> = ({ type, count }) => {
    return (
        // The more I see that I have to named those container
        // The more I think that inline tailwindcss makes completely sense
        <ItemCountBox direction="row" margin={{ horizontal: 'small' }}>
            <Box>
                <Pictogram src={`/pictograms/${type}.svg`} />
            </Box>
            <Box justify="end">
                <Counter>{count}</Counter>
            </Box>
        </ItemCountBox>
    )
}

const ItemsCount: React.FC<{
    items: { [type in ItemType]: number }
}> = props => {
    return (
        <Box direction="row">
            {Object.entries(props.items).map(([type, count]) => (
                <ItemCount key={type} type={type} count={count} />
            ))}
        </Box>
    )
}

export default ItemsCount
