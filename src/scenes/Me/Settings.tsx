import * as React from 'react'
import TopBar from '../../components/TopBar2'
import { AuthenticatedUser } from '../../services/authentication'
import Sidenav from './Sidenav'

export default ({ loggedInUser }: { loggedInUser: AuthenticatedUser }) => {
    return (
        <div className="flex h-screen text-sm">
            <Sidenav authUserId={loggedInUser.id} />
            <div className="flex flex-1 flex-col overflow-auto">
                <TopBar
                    avatar={loggedInUser.picture}
                    username={loggedInUser.name}
                />
                <div className="flex-1 text-sm">Settings</div>
            </div>
        </div>
    )
}
