import * as React from 'react'
import Link from 'next/link'
import SettingsIcon from '../../public/pictograms/settings.svg'

interface ITopBarProps {
    message?: string
    avatar: string
    username: string
}

const TopBar: React.FunctionComponent<ITopBarProps> = ({
    message,
    avatar,
    username,
}) => {
    return (
        <div className="w-full px-2 h-8 flex justify-end items-center text-gray-600 leading-none flex-shrink-0">
            <p className="mx-1">{message}</p>
            <img
                src={avatar}
                alt="userAvatar"
                className="mx-1 h-5 rounded-full"
            />
            <p className="mx-1 capitalize">{username}</p>
            <p className="mx-1 text-gray-400">|</p>
            <Link as="/me/settings" href="/me/settings">
                <a className="mx-1">
                    <SettingsIcon
                        className="text-gray-600"
                        height={14}
                        width={14}
                    />
                </a>
            </Link>
        </div>
    )
}

export default TopBar
