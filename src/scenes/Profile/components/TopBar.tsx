import * as React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { useGetBreadcrumbsQuery } from '../../../generated/types'

interface ITopBarProps {
    avatar?: string
    username?: string
    authUserId?: string
}

const TopBar: React.FunctionComponent<ITopBarProps> = ({
    avatar,
    username,
}) => {
    const { data } = useGetBreadcrumbsQuery()
    return (
        <div className="w-full px-2 h-8 flex justify-between items-center text-gray-800 leading-none flex-shrink-0">
            <div className="flex items-center">
                <Link as="/me" href="/me">
                    <a className="flex items-center h-6 bg-white text-brand-800 border border-brand-800 rounded px-2 text-xs hover:shadow hover:text-brand-800">
                        Edit profile
                    </a>
                </Link>
                <div className="text-gray-500 ml-4 leading-none">
                    {data?.breadcrumbs?.map((x, index) => {
                        return (
                            <span key={x.href} className="min-w-0">
                                <Link key={x.href} as={x.as} href={x.href}>
                                    <a className="inline-block truncate px-2 hover:text-gray-900 max-w-xxs">
                                        {x.title}
                                    </a>
                                </Link>
                                <span
                                    className={classNames(
                                        'my-2 align-top align-text-top',
                                        {
                                            hidden:
                                                index >=
                                                data?.breadcrumbs.length - 1,
                                        }
                                    )}
                                >
                                    /
                                </span>
                            </span>
                        )
                    })}
                </div>
            </div>
            <div className="flex justify-end items-center text-gray-800 flex-shrink-0">
                <img
                    src={avatar}
                    alt="userAvatar"
                    className="mx-1 h-5 rounded-full"
                />
                <p className="mx-1 text-gray-600">{username}</p>
                <p className="mx-1 text-gray-400">|</p>
                <img className="h-4 mx-1" src="/logo.svg" alt="Tottem logo" />
                <p className="ml-1 mr-2 capitalize">Tottem</p>
            </div>
        </div>
    )
}

export default TopBar
