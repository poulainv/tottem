import * as React from 'react'
import { Box, Image } from 'grommet'
import { Item, imageShapes } from '../../types'
import styled from 'styled-components'
import { ElementTitle, ElementAuthor } from '../Typography'

interface IItemListProps {
    items: Item[]
}

const ItemImage = styled(Image)`
    width: 160px;
    border-radius: ${(props: { radius: string }) => props.radius};
    border: solid 0.5px #ededed;
`
const Pictogram = styled(Box)`
    height: 30px;
    justify-content: center;
    align-content: center;
    width: 30px;
    background-color: #6faa9c;
    border-radius: 50%;
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

const ContentBox = styled(Box)`
    margin-top: 40px;
    width: 100%;
    @media screen and (max-width: 812px) {
        margin-top: 24px;
        padding-right: 0px;
        padding-left: 0px;
    }
`

const ItemList: React.FunctionComponent<IItemListProps> = props => {
    return (
        <ContentBox
            pad={{ horizontal: 'large' }}
            // margin={{ vertical: 'large' }}
            // width="full"
        >
            <CollectionCard background="white" pad="large">
                {props.items.map(item => {
                    return (
                        <Box
                            key={item.title}
                            direction="row"
                            margin={{ bottom: 'large' }}
                        >
                            <Box
                                direction="row"
                                width="100%"
                                justify="between"
                                height={
                                    imageShapes[item.type] === 'rectangle'
                                        ? 'auto'
                                        : '160px'
                                }
                            >
                                <Box direction="row">
                                    <a
                                        href={item.productUrl}
                                        target="_blank"
                                        style={{ display: 'flex ' }}
                                    >
                                        <ItemImage
                                            src={item.imageUrl}
                                            fit="cover"
                                            radius={
                                                imageShapes[item.type] ===
                                                'circle'
                                                    ? '50%'
                                                    : '4px'
                                            }
                                        />
                                    </a>
                                    <Box margin={{ horizontal: 'large' }}>
                                        <ElementTitle
                                            href={item.productUrl}
                                            target="_blank"
                                        >
                                            {item.title}
                                        </ElementTitle>
                                        <ElementAuthor>
                                            {item.author}
                                        </ElementAuthor>
                                    </Box>
                                </Box>
                                <Pictogram>
                                    <img
                                        src={`/pictograms/${item.type}-white.svg`}
                                        height="16px"
                                    />
                                </Pictogram>
                            </Box>
                        </Box>
                    )
                })}
            </CollectionCard>
        </ContentBox>
    )
}

export default ItemList
