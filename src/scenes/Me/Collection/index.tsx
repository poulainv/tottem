import * as React from 'react'
import { getAuthUser } from '../../../services/authentication'
import LoadingPage from '../../LoadingPage'
import Sidenav from '../Sidenav'
import TextareaAutosize from 'react-textarea-autosize'
import { useCollectionForm } from './HeaderForm/hooks'
import { useGetCollectionIdQuery } from '../../../generated/types'
import View from './View'

interface Props {
    collectionId: string
}

export default ({ collectionId }: Props) => {
    const authUser = getAuthUser()

    if (authUser === undefined) {
        return <LoadingPage />
    }

    const { data, loading } = useGetCollectionIdQuery({
        variables: { collectionId },
    })

    if (!data || !data.collection || loading) {
        return <LoadingPage />
    }

    const { collection } = data

    return <View collection={collection} authUser={authUser} />
}
