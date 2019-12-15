import * as React from 'react'
import { getAuthUser, AuthenticatedUser } from '../../services/authentication'
import LoadingPage from '../LoadingPage'
import Sidenav from './Sidenav'
import TopBar from '../../components/TopBar2'

export default ({ loggedInUser }: { loggedInUser: AuthenticatedUser }) => {
    return (
        <div className="flex h-screen text-sm">
            <Sidenav authUserId={loggedInUser.id} />
            <div className="flex flex-1 flex-col">
                <TopBar
                    avatar={loggedInUser.picture}
                    username={loggedInUser.name}
                />
                <div className="flex-1 text-sm">Settings</div>
            </div>
        </div>
    )
}
