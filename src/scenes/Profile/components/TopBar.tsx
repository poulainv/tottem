import * as React from 'react'
import Link from 'next/link'

interface ITopBarProps {
    avatar?: string
    username?: string
    authUserId?: string
}

const TopBar: React.FunctionComponent<ITopBarProps> = ({}) => {
    return (
        <div className="w-full px-2 h-8 flex justify-between items-center text-gray-800 leading-none">
            <Link as="/me" href="/me">
                <a className="flex items-center h-6 text-brand-800 border border-brand-800 rounded px-2 text-xs">
                    Edit profile
                </a>
            </Link>
            <div className="flex justify-end items-center text-gray-800 flex-shrink-0">
                <p className="mx-1">Share</p>
                <span className="text-gray-400">|</span>
                <img className="h-4 mx-1" src="/logo.svg" alt="Tottem logo" />
                <p className="ml-1 mr-2 capitalize">Tottem</p>
            </div>
        </div>
    )
}

export default TopBar
