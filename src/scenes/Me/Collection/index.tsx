import * as React from 'react'
import TopBar from '../../../components/TopBar2'
import { useGetCollectionIdQuery } from '../../../generated/types'
import { getAuthUser } from '../../../services/authentication'
import LoadingPage from '../../LoadingPage'
import Sidenav from '../Sidenav'
import HeaderForm from './HeaderForm'
import { useStatusMessage } from './Status'

interface Props {
    collectionId: string
}

export default ({ collectionId }: Props) => {
    const authUser = getAuthUser()

    const [message, dispatch] = useStatusMessage()

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

    return (
        <div className="flex h-screen text-sm ">
            <Sidenav authUserId={authUser.id} />
            <div className="flex flex-1 flex-col">
                <TopBar
                    message={message}
                    avatar={authUser.picture}
                    username={authUser.name}
                />
                <main className="text-sm">
                    <HeaderForm
                        collection={collection}
                        onChange={() => dispatch('CHANGED')}
                        onSaved={() => dispatch('SAVED')}
                        onSaving={() => dispatch('SAVING')}
                    />
                </main>
            </div>
        </div>
    )
}
