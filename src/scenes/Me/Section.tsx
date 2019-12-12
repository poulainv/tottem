import * as React from 'react'
import { getAuthUser } from '../../services/authentication'
import LoadingPage from '../LoadingPage'
import Sidenav from './Sidenav'

interface SectionPageProps {
    sectionId: string
}

export default ({ sectionId }: SectionPageProps) => {
    const authUser = getAuthUser()

    if (authUser === undefined) {
        return <LoadingPage />
    }

    return (
        <div className="flex h-screen text-sm">
            <Sidenav authUserId={authUser.id} />
            <div className="flex-1 text-sm">Section {sectionId}</div>
        </div>
    )
}