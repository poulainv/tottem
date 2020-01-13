import classNames from 'classnames'
import Link from 'next/link'
import Router from 'next/router'
import { BulletList } from 'react-content-loader'
import ArchivedIcon from '../../../../../public/pictograms/archived.svg'
import InboxIcon from '../../../../../public/pictograms/inbox.svg'
import { useCreateSectionMutation } from '../../../../generated/types'
import { useSideNav } from './hooks'
import ProfileIcon from './profile.svg'
import SectionGroup from './SectionGroup'

interface SidenavProps {
    currentHref: string
    authUserId: string
    inboxCount: number | undefined
    currentUserSlug?: string
    sections:
        | Array<{
              title?: string
              id: string
              isExpanded: boolean
              collections: Array<{
                  title?: string
                  id: string
                  isDeleted: boolean
              }>
          }>
        | undefined
}

const Sidenav: React.FC<SidenavProps> = ({
    inboxCount,
    sections,
    currentUserSlug,
    currentHref,
    authUserId,
}) => {
    const { updateSections } = useSideNav(authUserId)

    const [createSection] = useCreateSectionMutation({
        onCompleted: data => {
            Router.push(
                '/me/s/[sectionId]',
                `/me/s/${data.createEmptySection.id}`
            )
        },
        update: updateSections,
    })
    return (
        <nav className="leading-none font-medium w-64 p-4 bg-gray-100 text-gray-900 flex flex-col">
            <img className="h-6 self-start" src="/logo.svg" alt="Tottem logo" />
            <div className="mt-10 flex flex-col flex-1 min-h-0">
                <div className="mb-6">
                    <Link as={`/${currentUserSlug}`} href="/[profile]">
                        <a
                            className={`block px-2 py-1 mb-1 rounded hover:bg-brand-100 cursor-pointer ${
                                currentHref === '/' ? 'bg-brand-100' : ''
                            }`}
                        >
                            <div className="flex items-center">
                                <ProfileIcon
                                    height={14}
                                    width={14}
                                    className="mr-1 fill-current"
                                    style={{ color: '#595959' }}
                                />
                                <span className="text-gray-800">Profile</span>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="mb-6">
                    <Link as="/me/inbox" href="/me/inbox">
                        <a
                            className={classNames(
                                `block px-2 py-1 mb-1 rounded hover:bg-brand-100 cursor-pointer`,
                                {
                                    'bg-brand-100': [
                                        '/me/inbox',
                                        '/me',
                                    ].includes(currentHref),
                                }
                            )}
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <InboxIcon
                                        height={14}
                                        width={14}
                                        className="mr-1 fill-current"
                                        style={{ color: '#7DC8D4' }}
                                    />
                                    <span className="text-gray-800">Inbox</span>
                                </div>
                                <div className="text-gray-600">
                                    {inboxCount}
                                </div>
                            </div>
                        </a>
                    </Link>
                    <Link as="/me/archived" href="/me/archived">
                        <a
                            className={classNames(
                                `flex items-center block px-2 py-1 mb-1 rounded hover:bg-brand-100 cursor-pointer`,
                                {
                                    'bg-brand-100':
                                        currentHref === '/me/archived',
                                }
                            )}
                        >
                            <ArchivedIcon
                                height={14}
                                width={14}
                                className="mr-1 fill-current"
                                style={{ color: '#3F55C9' }}
                            />
                            <span className="text-gray-800">Archived</span>
                        </a>
                    </Link>
                </div>
                <div className="text-xs text-gray-700 px-2 overflow-hidden font-semibold mb-2">
                    SPACES
                </div>
                {sections ? (
                    <div className="flex flex-col flex-1 min-h-0">
                        <div className="flex-1 overflow-y-auto w-full">
                            {sections.map(section => {
                                return (
                                    <SectionGroup
                                        currentHref={currentHref}
                                        key={section.id}
                                        {...section}
                                        isExpanded={section.isExpanded}
                                        authUserId={authUserId}
                                    />
                                )
                            })}
                        </div>
                        <button
                            onClick={() => createSection()}
                            className="w-full px-2 py-1 flex justify-center bg-white hover:bg-brand-50 text-gray-700 rounded mt-2 border border-brand-500"
                        >
                            + New Space
                        </button>
                    </div>
                ) : (
                    <BulletList className="pl-2" />
                )}
            </div>
        </nav>
    )
}

export default Sidenav
