import * as React from 'react'
import TopBar from './TopBar'
import { AuthenticatedUser } from '../../../services/authentication'
import { useTracking } from '../../common'

interface Props {
    loggedInUser?: AuthenticatedUser
    children: (authUserId?: string) => React.ReactNode
}

export default ({ loggedInUser, children }: Props) => {
    useTracking()
    return (
        <div className="flex h-screen">
            <div className="flex flex-1 flex-col overflow-auto h-full">
                <TopBar
                    avatar={loggedInUser?.picture}
                    username={loggedInUser?.name}
                />
                <main>{children(loggedInUser?.id)}</main>
            </div>
        </div>
    )
}
