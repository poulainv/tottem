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
        <div className="w-full px-2 h-10 flex justify-between items-center text-gray-800 leading-none flex-shrink-0 bg-white">
            <div className="flex items-center">
                {username && (
                    <Link as="/me" href="/me">
                        <a className="flex items-center h-6 bg-white text-teal-700 border border-teal-700 rounded px-2 text-xs hover:shadow hover:text-teal-700 whitespace-no-wrap">
                            Edit my profile
                        </a>
                    </Link>
                )}
                <div className="text-gray-500 ml-4 leading-none text-sm hidden xl:block">
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
                {username ? (
                    <Link as="/me" href="/me">
                        <a className="flex items-center flex-shrink-0">
                            <img
                                src={avatar}
                                alt="userAvatar"
                                className="mx-1 h-5 rounded-full"
                            />

                            <p className="mx-1 text-gray-700 text-sm">
                                {username}
                            </p>
                            <p className="mx-1 text-gray-400">|</p>
                        </a>
                    </Link>
                ) : (
                    <Link href="/auth/login" as="/auth/login">
                        <a className="text-sm font-medium text-teal-700">
                            Create an account
                            <span className="ml-2 mr-1 text-gray-400">|</span>
                        </a>
                    </Link>
                )}
                <img className="h-4 mx-1" src="/logo.svg" alt="Tottem logo" />
                <Link href="/" as="/">
                    <a className="ml-1 mr-2 capitalize text-sm">Tottem</a>
                </Link>
            </div>
        </div>
    )
}

export default TopBar
