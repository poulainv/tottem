import * as React from 'react'
import TopBar from './TopBar'
import { AuthenticatedUser } from '../../../services/authentication'

interface Props {
    loggedInUser?: AuthenticatedUser
    children: (authUserId?: string) => React.ReactNode
}

export default ({ loggedInUser, children }: Props) => {
    return (
        <div
            className="flex h-screen text-sm"
            style={{ backgroundColor: '#FAFAFA' }}
        >
            <div className="flex flex-1 flex-col overflow-auto h-full">
                <TopBar
                    avatar={loggedInUser?.picture}
                    username={loggedInUser?.name}
                />
                <main className="text-sm w-full max-w-2xl xl:max-w-4xl mx-16 xl:mx-auto mt-2 pb-16">
                    {children(loggedInUser?.id)}
                </main>
            </div>
        </div>
    )
}
