import * as React from 'react'
import { useGetCollectionIdQuery } from '../../../generated/types'
import { getAuthUser } from '../../../services/authentication'
import LoadingPage from '../../LoadingPage'
import Sidenav from '../Sidenav'
import HeaderForm from './HeaderForm'
import Status from './Status'
import { InlineIcon } from '@iconify/react'
import baselineSettings from '@iconify/icons-ic/outline-settings'

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

    return (
        <div className="flex h-screen text-sm ">
            <Sidenav authUserId={authUser.id} />
            <div className="flex flex-1 flex-col">
                <div className="w-full px-2 h-8 flex justify-end items-center text-gray-700 leading-none">
                    <img
                        src={authUser.picture}
                        alt="userAvatar"
                        className="mx-1 h-4 rounded-full"
                    />
                    <p className="mx-1">Vincent</p>
                    <p className="mx-1">|</p>
                    <InlineIcon
                        className="mx-1"
                        height={14}
                        width={14}
                        icon={baselineSettings}
                    />{' '}
                </div>
                <main className="text-sm">
                    <Status>
                        {(
                            onSavedF: (collectionId: string) => void,
                            onSaving: () => void
                        ) => (
                            <HeaderForm
                                collection={collection}
                                onSaved={onSavedF}
                                onSaving={onSaving}
                            />
                        )}
                    </Status>
                </main>
            </div>
        </div>
    )
}
