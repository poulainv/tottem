import * as React from 'react'
import TopBar from '../../../components/TopBar2'
import { useGetCollectionIdQuery } from '../../../generated/types'
import { AuthenticatedUser } from '../../../services/authentication'
import LoadingPage from '../../LoadingPage'
import ItemForm from '../ItemForm'
import Sidenav from '../Sidenav'
import HeaderForm from './HeaderForm'
import { useStatusMessage } from './Status'

interface Props {
    collectionId: string
    loggedInUser: AuthenticatedUser
}

export default ({ loggedInUser, collectionId }: Props) => {
    const [message, dispatch] = useStatusMessage()

    const { data, loading } = useGetCollectionIdQuery({
        variables: { collectionId },
    })
    if (!data || !data.collection || loading) {
        return <LoadingPage />
    }

    const { collection } = data

    return (
        <div className="flex h-screen text-sm ">
            <Sidenav authUserId={loggedInUser.id} />
            <div className="flex flex-1 flex-col">
                <TopBar
                    message={message}
                    avatar={loggedInUser.picture}
                    username={loggedInUser.name}
                />
                <main className="text-sm w-full max-w-4xl mx-auto mt-2">
                    <HeaderForm
                        collection={collection}
                        // tslint:disable-next-line: jsx-no-lambda
                        onChange={() => dispatch('CHANGED')}
                        // tslint:disable-next-line: jsx-no-lambda
                        onSaved={() => dispatch('SAVED')}
                        // tslint:disable-next-line: jsx-no-lambda
                        onSaving={() => dispatch('SAVING')}
                    />
                    <ItemForm collectionId={collection.id} />
                    <div className="mt-5">Hello</div>
                </main>
            </div>
        </div>
    )
}
