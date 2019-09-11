import React from 'react'
import { Book } from '../types'

import styled from 'styled-components'

const StyledImage = styled.img`
    height: 10em;
    border-radius: 8px;
`

const StyledBox = styled.div``

const BookCard: React.FC<Book> = props => {
    const image = props.imageUrl
    return (
        <StyledBox>
            <StyledImage src={image} />
        </StyledBox>
    )
}

export default BookCard
