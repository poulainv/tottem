import { useApolloClient } from '@apollo/react-hooks'
import { ApolloQueryResult } from 'apollo-client'
import { Box } from 'grommet'
import { NextSeo } from 'next-seo/lib'
import { useRouter } from 'next/router'
import * as React from 'react'
import useForm from 'react-hook-form'
import styled from 'styled-components'
import { Layout, PageBox } from '../../components/Layout'
import {
    GetUserBySlugDocument,
    useCreateUserMutation,
    UserBasicFragment,
} from '../../generated/types'
import { useAuthUser } from '../../services/authentication'

const ContentBox = styled(Box)`
    margin-top: 40px;
    @media screen and (max-width: 812px) {
        margin-top: 8px;
        padding-right: 0;
        padding-left: 0;
    }
`

interface SlugFormData {
    slug: string
}

const useCheckSlugForm = () => {
    const { register, handleSubmit, errors } = useForm<SlugFormData>()

    const authUser = useAuthUser()
    const router = useRouter()
    const [createUser, { data, called }] = useCreateUserMutation()

    const onSubmit = handleSubmit(({ slug }) => {
        if (!authUser) {
            return
        }
        // create user
        createUser({
            variables: {
                slug,
                authUserId: authUser.id,
                biography: '',
                pictureUrl: authUser.picture,
            },
        })
    })

    if (called && data) {
        // redirect user to their profile
        router.push('/' + data.user.slug)
    }

    return { register, onSubmit, errors }
}

interface UserBasicData {
    user: UserBasicFragment
}

export default function WelcomePage() {
    const apollo = useApolloClient()
    const { register, onSubmit } = useCheckSlugForm()

    const check = async (slug: string) => {
        const res: ApolloQueryResult<UserBasicData> = await apollo.query<
            UserBasicData
        >({
            query: GetUserBySlugDocument,
            variables: { slug },
        })
        return res.data.user === null
    }

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
                    <form onSubmit={onSubmit}>
                        <input
                            name="slug"
                            ref={register({
                                validate: async value => await check(value),
                            })}
                            type="text"
                            placeholder="Username"
                        />
                    </form>
                </ContentBox>
            </PageBox>
        </Layout>
    )
}
