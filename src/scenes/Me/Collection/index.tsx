import * as React from 'react'
import TopBar from '../../../components/TopBar2'
import { useGetCollectionIdQuery } from '../../../generated/types'
import { getAuthUser } from '../../../services/authentication'
import LoadingPage from '../../LoadingPage'
import Sidenav from '../Sidenav'
import HeaderForm from './HeaderForm'
import { useStatusMessage } from './Status'
import AddButton from '../ItemForm/AddButton'

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
                    <div className="bg-teal-200 h-8 relative mt-8">
                        <div className="absolute bottom-0 -left-4">
                            <AddButton />
                        </div>
                    </div>
                    <div className="bg-green-200">hello</div>
                </main>
            </div>
        </div>
    )
}
