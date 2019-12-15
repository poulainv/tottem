import * as React from 'react'
import TopBar from '../../components/TopBar2'
import { AuthenticatedUser } from '../../services/authentication'
import Sidenav from './Sidenav'

interface SectionPageProps {
    sectionId: string
    loggedInUser: AuthenticatedUser
}

export default ({ loggedInUser, sectionId }: SectionPageProps) => {
    return (
        <div className="flex h-screen text-sm">
            <Sidenav authUserId={loggedInUser.id} />
            <div className="flex flex-1 flex-col">
                <TopBar
                    avatar={loggedInUser.picture}
                    username={loggedInUser.name}
                />
                <div className="flex-1 text-sm">Section {sectionId}</div>
            </div>
        </div>
    )
}
