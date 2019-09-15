import * as React from 'react'
import styled from 'styled-components'

const UserPictureContainer = styled.div`
    border-radius: 50%;
    height: 172px;
    width: 172px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

const userPictureSrc = require('../../static/images/profiles/stiegler.jpg')

const UserPictureImg = styled.img`
    width: 100%;
`

const PictureProfile = () => {
    return (
        <UserPictureContainer>
            <UserPictureImg src={userPictureSrc} />
        </UserPictureContainer>
    )
}

export default PictureProfile
