import { Box, Button, Collapsible, Markdown, Text } from 'grommet'
import React from 'react'
import ReactGA from 'react-ga'
import styled from 'styled-components'
import { ICollection } from '../../types'
import { MediumAndUp } from '../ResponsiveStyledComponent'
import ItemList from './ItemList'

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

const CollectionCard = styled(Box)`
    border-radius: 6px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    @media screen and (max-width: 812px) {
        box-shadow: none;
        border-radius: 0px;
        border-top: 1px #dddddd solid;
        border-bottom: 1px #dddddd solid;
    }
`

const Collection: React.FC<ICollection> = props => {
    const [open, setOpen] = React.useState(false)

    const trackExpand = () => {
        ReactGA.initialize('UA-149517534-1')
        ReactGA.event({
            category: 'Collection',
            action: 'Click on expand collection',
        })
    }

    const seeMore = (
        <Box margin={{ horizontal: 'medium' }} onClick={trackExpand}>
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
        <CollectionCard
            direction="column"
            margin={{ vertical: 'medium' }}
            background="white"
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
                <MediumAndUp>{props.items.length > 4 && seeMore}</MediumAndUp>
            </Box>
            <Box margin={{ bottom: 'none' }}>
                <ItemList items={props.items} expanded={open} />
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
        </CollectionCard>
    )
}

export default Collection
