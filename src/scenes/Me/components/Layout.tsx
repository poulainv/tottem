import { AuthenticatedUser } from '../../../services/authentication'
import { useTracking } from '../../common'
import NotAuthenticated from '../../UtilsPage/NotAuthenticated'
import NavigateModal from './NavigateModal'
import Sidenav from './Sidenav'
import TopBar from './TopBar'

export type DispatchableAction = (
    action: 'SAVED' | 'SAVING' | 'CHANGED'
) => void

interface Props {
    loggedInUser?: AuthenticatedUser
    children: (authUserId: string) => React.ReactNode
}

export default ({ loggedInUser, children }: Props) => {
    useTracking()
    return loggedInUser ? (
        <div className="flex h-screen text-sm font-sans">
            <Sidenav authUserId={loggedInUser.id} />
            <NavigateModal authUserId={loggedInUser.id} />
            <div className="flex flex-1 flex-col lg:overflow-auto h-full">
                <TopBar
                    avatar={loggedInUser.picture}
                    username={loggedInUser.name}
                />
                <main className="text-sm lg:w-full max-w-2xl xl:max-w-4xl mx-16 xl:mx-auto mt-2 pb-16">
                    {children(loggedInUser.id)}
                </main>
            </div>
        </div>
    ) : (
        <NotAuthenticated />
    )
}
