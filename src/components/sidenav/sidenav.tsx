import { Box } from 'grommet'
import React from 'react'
import styled from 'styled-components'

const SidenavContainer = styled.div`
    width: 511px;
    height: 100%;
    padding-top: 115px;
`
const SidenavContent = styled.div`
    width: 270px;
    margin: auto;
`

const UserPictureContainer = styled.div`
    border-radius: 50%;
    height: 172px;
    width: 172px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

const userPictureSrc = require('../../static/images/stiegler.jpg')

const UserPictureImg = styled.img`
    width: 100%;
`

const Hello = styled.h1`
    font-family: 'Work Sans', 'Roboto', Arial, sans-serif;
    font-size: 48px;
`

const Username = styled.div`
    font-family: 'Work Sans', 'Roboto', Arial, sans-serif;
    font-size: 24px;
    margin-top: 10px;
`

const Separator = styled.div`
    width: 43px;
    height: 11px;
    background-color: #3f55c9;
    margin-top: 39px;
    margin-bottom: 15px;
`

const UserBio = styled.div`
    font-family: 'Work Sans', 'Roboto', Arial, sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 160%;
`

const Sidenav: React.FC<any> = () => {
    return (
        <SidenavContainer>
            <SidenavContent>
                <Box direction="column">
                    <Box direction="column">
                        <Box direction="column">
                            <UserPictureContainer>
                                <UserPictureImg src={userPictureSrc} />
                            </UserPictureContainer>
                            <div>
                                <Hello>Hello,</Hello>
                                <Username>I'm Vincent</Username>
                            </div>
                        </Box>
                    </Box>
                    <Box direction="column">
                        <Separator />
                    </Box>
                    <UserBio>
                        <p>
                            I like building things.
                            <br />
                            My primary job function is as a software engineer.
                            <br />I care about how technology can support
                            well-being and global challenges.
                        </p>
                    </UserBio>
                    <div>Social</div>
                </Box>
            </SidenavContent>
        </SidenavContainer>
    )
}

export default Sidenav
