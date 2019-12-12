import * as React from 'react'
import { getAuthUser } from '../../services/authentication'
import LoadingPage from '../LoadingPage'
import Sidenav from './Sidenav'

interface Props {
    collectionId: string
}

export default ({ collectionId }: Props) => {
    const authUser = getAuthUser()

    if (authUser === undefined) {
        return <LoadingPage />
    }

    return (
        <div className="flex h-screen text-sm">
            <Sidenav authUserId={authUser.id} />
            <div className="flex-1 text-sm">Collection {collectionId} </div>
        </div>
    )
}
