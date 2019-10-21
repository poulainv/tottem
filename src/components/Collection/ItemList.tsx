import * as React from 'react'
import { Box, Image } from 'grommet'
import { Item, imageShapes } from '../../types'
import styled from 'styled-components'

interface IItemListProps {
    items: Item[]
}

const ItemImage = styled(Image)`
    width: 160px;
    border-radius: ${(props: { radius: string }) => props.radius};
    border: solid 0.5px #ededed;
`

const Title = styled.a`
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #000000;
    margin: 0px;
    cursor: pointer;
    text-decoration: none;
`

const Author = styled.p`
    font-size: 16px;
    margin: 16px 0px 0px 0px;
    line-height: 24px;
    /* Dark 3 */
    color: #777777;
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

const ItemList: React.FunctionComponent<IItemListProps> = props => {
    return (
        <Box
            pad={{ horizontal: 'large' }}
            margin={{ vertical: 'large' }}
            width="full"
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
                                    <a href={item.productUrl} target="_blank">
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
                                        <Title
                                            href={item.productUrl}
                                            target="_blank"
                                        >
                                            {item.title}
                                        </Title>
                                        <Author>{item.author}</Author>
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
        </Box>
    )
}

export default ItemList
