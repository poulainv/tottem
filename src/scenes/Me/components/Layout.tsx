import * as React from 'react'
import TopBar from './TopBar'
import { AuthenticatedUser } from '../../../services/authentication'
import NotAuthenticated from '../../UtilsPage/NotAuthenticated'
import { useStatusMessage } from './TopBar'
import Sidenav from './Sidenav'
import NavigateModal from './NavigateModal'

export type DispatchableAction = (
    action: 'SAVED' | 'SAVING' | 'CHANGED'
) => void

interface Props {
    loggedInUser?: AuthenticatedUser
    children: (
        dispatch: DispatchableAction,
        authUserId: string
    ) => React.ReactNode
}

export default ({ loggedInUser, children }: Props) => {
    const [message, dispatch] = useStatusMessage()

    return loggedInUser ? (
        <div className="flex h-screen text-sm">
            <Sidenav authUserId={loggedInUser.id} />
            <NavigateModal authUserId={loggedInUser.id} />
            <div className="flex flex-1 flex-col overflow-auto h-full">
                <TopBar
                    message={message}
                    avatar={loggedInUser.picture}
                    username={loggedInUser.name}
                />
                <main className="text-sm w-full max-w-2xl xl:max-w-4xl mx-16 xl:mx-auto mt-2 pb-16">
                    {children(dispatch, loggedInUser.id)}
                </main>
            </div>
        </div>
    ) : (
        <NotAuthenticated />
    )
}
