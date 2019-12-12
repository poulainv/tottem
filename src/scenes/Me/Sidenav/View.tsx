import inboxIcon from '@iconify/icons-ic/baseline-inbox'
import profileIcon from '@iconify/icons-ic/baseline-person'
import plusIcon from '@iconify/icons-ic/baseline-plus'
import archiveIcon from '@iconify/icons-ic/outline-archive'
import { InlineIcon } from '@iconify/react'
import { ReactElement } from 'react'
import { BulletList } from 'react-content-loader'
import SectionGroup from './SectionGroup'

interface ItemProps {
    title: string
    icon: ReactElement
    count?: number
    isActive?: boolean
    className?: string
}

const Item: React.FC<ItemProps> = ({
    isActive = false,
    className,
    icon,
    title,
    count,
}) => {
    const bgBrand200 = `bg-brand-100`
    return (
        <div
            className={`px-2 py-1 mb-1 rounded hover:${bgBrand200} cursor-pointer ${className} ${
                isActive ? bgBrand200 : ''
            }`}
        >
            <div className="flex justify-between items-center">
                <div>
                    <span className="mr-1">{icon}</span>
                    <span className="text-gray-800">{title}</span>
                </div>
                <div>{count}</div>
            </div>
        </div>
    )
}

interface SidenavProps {
    inboxCount: number | undefined
    sections:
        | Array<{
              title: string
              id: string
              isExpanded: boolean
              collections: Array<{ title: string; id: string }>
          }>
        | undefined
}

const Sidenav: React.FC<SidenavProps> = ({ inboxCount, sections }) => {
    return (
        <div className="leading-none font-medium w-64 p-4 bg-gray-100 text-gray-900 flex flex-col">
            <img className="h-6 self-start" src="/logo.svg" alt="Tottem logo" />
            <div className="mt-10 flex flex-col flex-1 min-h-0">
                <div className="mb-6">
                    <Item
                        title="Profile"
                        icon={
                            <InlineIcon
                                className="inline"
                                color="#BFBFBF"
                                icon={profileIcon}
                            />
                        }
                    />
                </div>
                <div className="mb-6">
                    <Item
                        title="Inbox"
                        isActive={true}
                        icon={
                            <InlineIcon
                                className="inline"
                                color="#7DC8D4"
                                icon={inboxIcon}
                            />
                        }
                        count={inboxCount}
                    />
                    <Item
                        title="Archive"
                        icon={
                            <InlineIcon
                                className="inline"
                                color="#3F55C9"
                                icon={archiveIcon}
                            />
                        }
                    />
                </div>
                <div className="text-xs text-gray-700 px-2 overflow-hidden font-semibold mb-2">
                    SPACES
                </div>
                {sections ? (
                    <div className="flex flex-col flex-1 min-h-0">
                        <div className="flex-1 overflow-y-auto">
                            {sections.map(section => {
                                return (
                                    <SectionGroup
                                        key={section.id}
                                        {...section}
                                        isExpanded={section.isExpanded}
                                        isActive={false}
                                    />
                                )
                            })}
                        </div>
                        <button className="w-full px-2 py-1 flex justify-center bg-white hover:bg-brand-100 text-gray-700 rounded mt-2 border border-brand-500">
                            <InlineIcon
                                className="inline mr-1"
                                icon={plusIcon}
                            />
                            New Area
                        </button>
                    </div>
                ) : (
                    <BulletList className="pl-2" />
                )}
            </div>
        </div>
    )
}

export default Sidenav
