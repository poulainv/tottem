import { Box } from 'grommet'
import range from 'lodash.range'
import * as React from 'react'
import { Facebook } from 'react-content-loader'
import styled from 'styled-components'
import { colorPlaceholders } from '../../constants/colors'
import { imageShapes } from '../common'
import {
    ElementAuthor,
    ElementDescription,
    ElementTitle,
} from '../../components/Typographies'
import CardImage from '../../components/ItemCardPreview/CardImage'
import { ItemMetas } from './ItemMetas'
import { Item } from '../../generated/types'

interface IItemListProps {
    items: Array<
        Pick<
            Item,
            | 'id'
            | 'createdAt'
            | 'imageUrl'
            | 'comment'
            | 'productUrl'
            | 'provider'
            | 'title'
            | 'author'
            | 'type'
            | 'meta'
        >
    >
}

const ImageBox = styled(Box)`
    width: 160px;
    @media screen and (max-width: 600px) {
        width: 120px;
    }
`
const Pictogram = styled(Box)`
    flex-shrink: 0;
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
    margin: 40px 0px 40px 0px;
    padding: 0px 48px 0px 48px;
    width: 100%;
    @media screen and (max-width: 812px) {
        margin-top: 24px;
        padding-right: 0px;
        padding-left: 0px;
    }
`

export const ItemListPlaceholder: React.FunctionComponent = () => {
    return (
        <ContentBox>
            <CollectionCard background="white" pad="large">
                {range(4).map((i: number) => {
                    return (
                        <Facebook
                            key={i}
                            width={600}
                            height={140}
                            style={{ marginBottom: '48px' }}
                        />
                    )
                })}
            </CollectionCard>
        </ContentBox>
    )
}

const ItemList: React.FunctionComponent<IItemListProps> = props => {
    return (
        <ContentBox>
            <CollectionCard background="white" pad="large">
                {props.items.map(item => {
                    const picto = `/pictograms/${item.type}-white.svg`
                    return (
                        <Box
                            responsive={false}
                            key={item.id}
                            direction="row"
                            margin={{ bottom: 'large' }}
                            id={item.id}
                        >
                            <Box
                                direction="row"
                                margin={{ bottom: 'small' }}
                                width="100%"
                                justify="between"
                            >
                                <Box direction="row">
                                    <a
                                        href={item.productUrl || ''}
                                        target="_blank"
                                        style={{ display: 'flex ' }}
                                    >
                                        <ImageBox>
                                            <CardImage
                                                placeholderColor={
                                                    colorPlaceholders[item.type]
                                                }
                                                placeholderPicto={picto}
                                                imageUrl={item.imageUrl}
                                                imageShape={
                                                    imageShapes[item.type]
                                                }
                                            />
                                        </ImageBox>
                                    </a>
                                    <Box margin={{ horizontal: 'large' }}>
                                        <ElementTitle
                                            href={item.productUrl || ''}
                                            target="_blank"
                                        >
                                            {item.title}
                                        </ElementTitle>
                                        <ElementAuthor>
                                            {item.author}
                                        </ElementAuthor>
                                        <Box style={{ marginTop: '8px' }}>
                                            <ItemMetas item={item} />
                                        </Box>
                                        <Box style={{ marginTop: '8px' }}>
                                            <ElementDescription>
                                                {item.comment}{' '}
                                            </ElementDescription>
                                        </Box>
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
                {props.items.length === 0 && (
                    <p> Oops ! Pas d'éléments ajoutés 🤔 </p>
                )}
            </CollectionCard>
        </ContentBox>
    )
}

export default ItemList
