import { Icon, InlineIcon } from '@iconify/react'
import inboxIcon from '@iconify/icons-ic/baseline-inbox'
import archiveIcon from '@iconify/icons-ic/outline-archive'
import spaceIcon from '@iconify/icons-ic/baseline-layers'
import profileIcon from '@iconify/icons-ic/baseline-person'
import { ReactElement } from 'react'

interface ItemProps {
    title: string
    icon: ReactElement
    count?: string
    isActive?: boolean
    className?: string
}

const Group: React.FC = ({ children }) => {
    return <div className="mb-3">{children}</div>
}

const Item: React.FC<ItemProps> = ({
    isActive = false,
    className,
    icon,
    title,
    count,
    children,
}) => {
    const bgBrand200 = `bg-brand-200`
    return (
        <div
            className={`px-2 py-1 rounded hover:${bgBrand200} cursor-pointer ${className} ${
                isActive ? bgBrand200 : ''
            }`}
        >
            <div className="flex justify-between">
                <div>
                    <span className="mr-1">{icon}</span>
                    {title}
                </div>
                <div>{count}</div>
            </div>
        </div>
    )
}

const Subitem: React.FC = ({ children }) => {
    return (
        <div className="px-6 py-1 rounded hover:bg-brand-200 cursor-pointer">
            {children}
        </div>
    )
}

export const Sidenav = () => {
    return (
        <div className="leading-none w-64 p-4 bg-gray-200 text-gray-900 flex flex-col">
            <img className="w-6" src="/logo.svg" alt="Tottem logo" />
            <div className="mt-10">
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
                        count={'15'}
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
                <Group>
                    <Item
                        title="Société"
                        className="font-semibold"
                        icon={
                            <InlineIcon
                                className="inline"
                                color="#BFBFBF"
                                icon={spaceIcon}
                            />
                        }
                    />
                    <Subitem>🏏 Les docus qui tabassent</Subitem>
                    <Subitem>🎵 Deep House</Subitem>
                </Group>
                <Group>
                    <Item
                        title="Music"
                        className="font-semibold"
                        icon={
                            <InlineIcon
                                className="inline"
                                color="#BFBFBF"
                                icon={spaceIcon}
                            />
                        }
                    />
                    <Subitem>🏏 Les docus qui tabassent</Subitem>
                    <Subitem>🎵 Deep House</Subitem>
                </Group>
            </div>
        </div>
    )
}
