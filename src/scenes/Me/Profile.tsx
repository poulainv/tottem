import * as React from 'react'
import TopBar from '../../components/TopBar2'
import { AuthenticatedUser } from '../../services/authentication'
import Sidenav from './Sidenav'
import ProfilePage from '../ProfilePage'

export default ({
    loggedInUser,
    slug,
}: {
    loggedInUser: AuthenticatedUser
    slug: string
}) => {
    return (
        <div className="flex h-screen text-sm">
            <Sidenav authUserId={loggedInUser.id} />
            <div className="flex flex-1 flex-col overflow-auto">
                <TopBar
                    avatar={loggedInUser.picture}
                    username={loggedInUser.name}
                />
                <ProfilePage profile={slug} />
            </div>
        </div>
    )
}
