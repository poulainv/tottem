import { Icon } from 'antd'
import { Box } from 'grommet'
import * as React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../../../../components/Button'
import CardImage from '../../../../components/ItemCardPreview/CardImage'
import {
    ElementAuthor,
    ElementDescription,
    ElementTitle,
} from '../../../../components/Typographies'
import { Item } from '../../../../generated/types'
import { imageShapes } from '../../../common'
import { ItemMetas } from '../../ItemMetas'
import { useDeleteItem } from './hooks'

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

const CollectionCard = styled.div`
    border-radius: 6px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: white;
    padding: 16px 48px 16px 48px;
    margin: 0px 0px 48px 0px;

    @media screen and (max-width: 812px) {
        box-shadow: none;
        border-radius: 0px;
        border-top: 1px #dddddd solid;
        border-bottom: 1px #dddddd solid;
    }
`

const EditableItem: React.FunctionComponent<{ item: Item; innerRef: any }> = ({
    item,
    innerRef,
    ...dragHandleProps
}) => {
    const picto = `/pictograms/${item.type}-white.svg`
    const [isHover, setIsHover] = React.useState(false)
    const handleDelete = useDeleteItem()

    return (
        <CollectionCard
            ref={innerRef}
            // tslint:disable-next-line: jsx-no-lambda
            onMouseEnter={() => setIsHover(true)}
            // tslint:disable-next-line: jsx-no-lambda
            onMouseLeave={() => setIsHover(false)}
            {...dragHandleProps}
        >
            <Box responsive={false} direction="row" id={item.id}>
                <Box direction="row" width="100%" justify="between">
                    <Box direction="row">
                        <a
                            href={item.productUrl || ''}
                            target="_blank"
                            style={{ display: 'flex ' }}
                        >
                            <ImageBox>
                                <CardImage
                                    placeholderColor="white"
                                    placeholderPicto={picto}
                                    imageUrl={item.imageUrl}
                                    imageShape={imageShapes[item.type]}
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
                            <ElementAuthor>{item.author}</ElementAuthor>
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
                    <Box justify="between" align="end">
                        <Pictogram>
                            <img
                                src={`/pictograms/${item.type}-white.svg`}
                                height="16px"
                            />
                        </Pictogram>
                        {isHover && (
                            <StyledButton onClick={() => handleDelete(item.id)}>
                                <Icon type="delete" />
                            </StyledButton>
                        )}
                    </Box>
                </Box>
            </Box>
        </CollectionCard>
    )
}

export default EditableItem
