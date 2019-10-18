import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Box } from 'grommet/components/Box'
import { Grommet } from 'grommet/components/Grommet'
import { NextPage, NextPageContext } from 'next'
import { NextSeo } from 'next-seo'
import * as React from 'react'
import { Footer } from '../../components/Views/Footer'
import Header from '../../components/Views/Header'
import ProfileDescription from '../../components/Views/Nav'
import ProfileContent from '../../components/Views/ProfileContent'
import theme from '../../theme'
import { withApollo } from '../../utils/apollo'

interface IProfileProps {
    slug: string
    sectionId: string
}

const userQuery = gql`
    query getUser($slug: String!, $sectionId: String!) {
        user(where: { slug: $slug }) {
            slug
            firstname
            pictureUrl
            biography
            label
            social: profile {
                mail
                linkedin
                youtube
                website
            }
            sections {
                id
                name
                index
            }
        }
        collections(
            first: 4
            where: { section: { id: { equals: $sectionId } } }
        ) {
            id
            name
            date
            items {
                imageUrl
                productUrl
                title
                author
                type
            }
        }
    }
`

const Profile: NextPage<IProfileProps> = props => {
    const { loading, error, data } = useQuery(userQuery, {
        variables: { slug: props.slug, sectionId: props.sectionId },
    })

    if (loading) {
        return <div>Loading</div>
    }

    const { user, collections } = data
    const arrSum = (arr: number[]) =>
        arr.reduce((a: number, b: number) => a + b, 0)

    const collectionCount = collections.length

    return (
        <Grommet theme={theme}>
            <NextSeo
                title={`${user.firstname} - Tottem`}
                description={`See ${collectionCount} collections of ${user.firstname} - Tottem is place where enthusiastic people and organizations share relevant collections of hand-picked items — books, articles, movies and more`}
                openGraph={{
                    description: `See ${collectionCount} collections of ${user.firstname} - Tottem is place where enthusiastic people and organizations share relevant collections of hand-picked items — books, articles, movies and more`,
                    url: `https://tottem.app/${props.slug}`,
                    site_name: 'Tottem',
                    images: [
                        {
                            width: 556,
                            height: 392,
                            url: `https://tottem.app/thumbnail-${props.slug}.jpg`,
                        },
                    ],
                }}
            />

            <Box align="center" background="light-1">
                <Header />
                <Box margin={{ top: 'large' }} width="xlarge">
                    <ProfileDescription {...user} />
                    <ProfileContent
                        sections={user.sections}
                        collections={collections}
                        username={props.slug}
                    />
                    <Footer />
                </Box>
            </Box>
        </Grommet>
    )
}

interface Context extends NextPageContext {
    query: {
        slug: string
        section: string
    }
}

Profile.getInitialProps = async (context: Context) => {
    const slug: string = context.query.slug
    const sectionId: string = context.query.section
    return { slug, sectionId }
}

export default withApollo(Profile)
