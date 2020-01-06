import * as React from 'react'
import TopBar from '../../../components/TopBar2'
import { AuthenticatedUser } from '../../../services/authentication'
import { useStatusMessage } from '../Collection/Status'
import Sidenav from './Sidenav'
import NotAuthenticated from '../../UtilsPage/NotAuthenticated'

export type DispatchableAction = (
    action: 'SAVED' | 'SAVING' | 'CHANGED'
) => void

interface Props {
    loggedInUser?: AuthenticatedUser
    children: (dispatch: DispatchableAction) => React.ReactNode
}

export default ({ loggedInUser, children }: Props) => {
    const [message, dispatch] = useStatusMessage()

    return loggedInUser ? (
        <div className="flex h-screen text-sm">
            <Sidenav authUserId={loggedInUser.id} />
            <div className="flex flex-1 flex-col overflow-auto h-full">
                <TopBar
                    message={message}
                    avatar={loggedInUser.picture}
                    username={loggedInUser.name}
                />
                <main className="text-sm w-full max-w-4xl mx-auto mt-2 pb-16">
                    {children(dispatch)}
                </main>
            </div>
        </div>
    ) : (
        <NotAuthenticated />
    )
}
