import React, { useContext } from 'react'

import {
    Box,
    Heading,
    Markdown,
    Text,
    Button,
    Collapsible,
    ResponsiveContext,
} from 'grommet'
import ItemList from './ItemList'
import { ICollection } from '../../types'

const Collection: React.FC<ICollection> = props => {
    const size = useContext(ResponsiveContext)
    const isMobile = size !== 'large'

    const [open, setOpen] = React.useState(false)

    const maxItem = 4
    const initialItems = isMobile ? props.items : props.items.slice(0, maxItem)
    const collapsedItems = isMobile ? [] : props.items.slice(maxItem + 1)

    const seeMore = (
        <Box direction="row" justify="end">
            <Button
                label={
                    open
                        ? 'SHOW LESS ITEMS'
                        : 'SHOW ALL ' + props.items.length + ' ITEMS'
                }
                onClick={() => setOpen(!open)}
            />
        </Box>
    )

    return (
        <Box
            direction="column"
            fill="vertical"
            margin={{ vertical: 'medium' }}
            background="white"
            round="10px"
            elevation="card"
        >
            <Box
                direction="row"
                justify="between"
                align="center"
                border={{ side: 'bottom', color: 'light-3', size: '0.5px' }}
            >
                <Box responsive={false} margin={{ horizontal: 'medium' }}>
                    <Heading level="3" size="medium">
                        <Markdown>{props.name}</Markdown>
                    </Heading>
                </Box>
                {props.items.length > 4 && !isMobile && seeMore}
            </Box>
            <Box margin={{ bottom: 'large' }}>
                <ItemList items={initialItems} />
                {!isMobile && (
                    <Collapsible open={open}>
                        <ItemList items={collapsedItems} />
                    </Collapsible>
                )}
            </Box>
            {props.detail && (
                <Box
                    border={{ side: 'top', color: 'light-3', size: '0.5px' }}
                    // margin={{ top: 'large' }}
                >
                    <Box margin={{ horizontal: 'medium', vertical: 'medium' }}>
                        <Text color="dark-3" size="medium">
                            {props.detail}
                        </Text>
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default Collection
