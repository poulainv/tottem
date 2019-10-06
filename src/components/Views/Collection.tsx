import React, { useContext } from 'react'

import {
    Box,
    Markdown,
    Text,
    Button,
    Collapsible,
    ResponsiveContext,
} from 'grommet'
import ItemList from './ItemList'
import { ICollection } from '../../types'
import styled from 'styled-components'

const CollectionTitle = styled.h3`
    font-size: 16px;
    font-weight: 400;

    @media screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 20px;
    }
`

const CollectionDetail = styled(Text)`
    font-size: 16px;
    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`

const Collection: React.FC<ICollection> = props => {
    const size = useContext(ResponsiveContext)
    const isMobile = size === 'small'

    const [open, setOpen] = React.useState(false)

    const maxItem = 4
    const initialItems = isMobile ? props.items : props.items.slice(0, maxItem)
    const collapsedItems = isMobile ? [] : props.items.slice(maxItem)

    const seeMore = (
        <Box margin={{ horizontal: 'medium' }}>
            <Button
                style={{ fontSize: '14px' }}
                label={
                    open
                        ? 'SHOW LESS ITEMS'
                        : 'SHOW ALL ' + props.items.length + ' ITEMS'
                }
                // tslint:disable-next-line: jsx-no-lambda
                onClick={() => setOpen(!open)}
            />
        </Box>
    )

    return (
        <Box
            direction="column"
            margin={{ vertical: 'medium' }}
            background="white"
            round={isMobile ? '0px' : '6px'}
            elevation={isMobile ? 'none' : 'card'}
            border={
                isMobile
                    ? { side: 'horizontal', size: '0.5px', color: 'light-5' }
                    : false
            }
        >
            <Box
                direction="row"
                justify="between"
                align="center"
                border={{ side: 'bottom', color: 'light-3', size: '0.5px' }}
            >
                <Box responsive={false} margin={{ horizontal: 'medium' }}>
                    <CollectionTitle>
                        <Markdown>{props.name}</Markdown>
                    </CollectionTitle>
                </Box>
                {props.items.length > 4 && !isMobile && seeMore}
            </Box>
            <Box margin={{ bottom: !isMobile ? 'large' : 'none' }}>
                <ItemList items={initialItems} />
                {!isMobile && (
                    <Collapsible open={open}>
                        <ItemList items={collapsedItems} />
                    </Collapsible>
                )}
            </Box>
            {props.detail && (
                <Box border={{ side: 'top', color: 'light-3', size: '0.5px' }}>
                    <Box margin={{ horizontal: 'medium', vertical: 'medium' }}>
                        <CollectionDetail color="dark-3">
                            <Markdown>{props.detail}</Markdown>
                        </CollectionDetail>
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default Collection
