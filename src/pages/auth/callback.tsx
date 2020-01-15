import { useApolloClient } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import {
    GetUserByAuthIdDocument,
    GetUserByAuthIdQuery,
    useCreateNewUserMutation,
} from '../../generated/types'
import LoadingPage from '../../scenes/UtilsPage/Loading'
import { auth0, Auth0UserDetails } from '../../services/authentication'
import { withApollo } from '../../services/lib/apollo'

const Callback: React.FunctionComponent = props => {
    const client = useApolloClient()
    const router = useRouter()

    const [createNewUser, {}] = useCreateNewUserMutation({
        onCompleted: () => {
            router.push('/me/welcome')
        },
    })

    useEffect(() => {
        const handleAuthentication = async () => {
            const authInfo: Auth0UserDetails = (
                await auth0.handleAuthentication()
            ).user_details

            const { data } = await client.query<GetUserByAuthIdQuery>({
                query: GetUserByAuthIdDocument,
                variables: { authId: authInfo.sub },
            })

            if (!data.user && authInfo) {
                // FIXME to refine can not be unique
                const userSlug =
                    authInfo.nickname ??
                    authInfo.name ??
                    authInfo.email.split('@').slice(0)
                createNewUser({
                    variables: {
                        authUserId: authInfo.sub,
                        firstname: authInfo.given_name ?? userSlug,
                        slug: userSlug,
                        pictureUrl: authInfo?.picture,
                    },
                })
            } else if (data.user) {
                // redirect user to their profile
                router.push('/me')
            }
        }
        handleAuthentication()
    }, [])

    return <LoadingPage />
}

export default withApollo(Callback)
