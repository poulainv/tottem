import { useApolloClient, useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Box } from 'grommet'
import { NextSeo } from 'next-seo/lib'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as React from 'react'
import styled from 'styled-components'
import { Layout, PageBox } from '../../components/Layout'

const ContentBox = styled(Box)`
    margin-top: 40px;
    @media screen and (max-width: 812px) {
        margin-top: 8px;
        padding-right: 0px;
        padding-left: 0px;
    }
`
// const IS_ONBOARDING_QUERY = gql`
//     query IsOnboarding {
//         isOnboarding @client
//         isLoggedIn @client
//     }
// `
// const CREATE_USER = gql`
//     mutation CreateUser(
//         $slug: String!
//         $auth0Id: String!
//         $pictureUrl: String
//     ) {
//         createOneUser(slug: $slug, auth0Id: $auth0Id, pictureUrl: $pictureUrl) {
//             slug
//             auth0Id
//             firstname
//             pictureUrl
//             biography
//         }
//     }
// `

export default function WelcomePage() {
    const router = useRouter()
    const apollo = useApolloClient()
    // checking if the user is inside the onboarding process, if not we redirect him to the landpage
    // const { loading, data } = useQuery(IS_ONBOARDING_QUERY)
    const [userName, setUserName] = useState('')

    const checkUsername = async () => {
        // check if username exists
        if (!userName.trim().length) {
            return
        }
        //     const res = await apollo.query({
        //         query: GET_USER_BY_SLUG,
        //         variables: { slug: userName },
        //     })
        //     if (res.data.user) {
        //         alert('User already exists, pick another one')
        //     } else {
        //         // create user in db with correct username and auth0id, then redirecit to its profile
        //         await apollo.mutate({
        //             mutation: CREATE_USER,
        //             variables: {
        //                 slug: userName,
        //                 auth0Id: 'auth0|5dc840e6d6b74c0e726e51ed',
        //                 pictureUrl:
        //                     'https://s.gravatar.com/avatar/46b10304c5ed2c36ab9541d9f676794f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fde.png',
        //             },
        //         })
        //         router.push(`/${userName}`)
        //     }
    }

    // if (loading || data === undefined) {
    //     return <LoadingPage />
    // }
    // if (!data.isOnboarding) {
    //     // redirect user to the homepage
    //     // router.push('/')
    //     // return null
    // }
    return (
        <Layout>
            <NextSeo
                title={`Welcome - Tottem`}
                description={`Welcome on Tottem!`}
                canonical={`https://tottem.app/welcome`}
                twitter={{
                    site: '@TottemApp',
                    cardType: 'summary',
                }}
                openGraph={{
                    type: 'welcome',
                    description: `Welcome on Tottem!`,
                    url: `https://tottem.app/welcome`,
                    site_name: 'Tottem',
                    images: [
                        {
                            url: `https://tottem.app/logo.png`,
                        },
                    ],
                }}
            />

            <PageBox>
                <ContentBox pad={{ horizontal: 'large' }}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={'userName'}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <button onClick={() => checkUsername()}>
                        Create account
                    </button>
                </ContentBox>
            </PageBox>
        </Layout>
    )
}
