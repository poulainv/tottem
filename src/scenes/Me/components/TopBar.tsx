import * as React from 'react'
import Link from 'next/link'
import SettingsIcon from '../../../../public/pictograms/settings.svg'
import SearchIcon from '../../../../public/pictograms/search.svg'
import { useNavigationModal } from './NavigateModal/hooks'
import { Tooltip } from 'antd'
import { useGetStatusMessageQuery } from '../../../generated/types'
import { useApolloClient } from '@apollo/react-hooks'

interface ITopBarProps {
    avatar: string
    username: string
}

export const useStatusMessage = () => {
    const client = useApolloClient()
    const dispatch = (action: 'SAVED' | 'SAVING' | 'CHANGED') => {
        switch (action) {
            case 'SAVED':
                setTimeout(() => dispatch('CHANGED'), 3000)
                return client.writeData({
                    data: {
                        statusMessage: 'Saved!',
                    },
                })
            case 'SAVING':
                return client.writeData({
                    data: {
                        statusMessage: 'Saving...',
                    },
                })
            default:
                return client.writeData({
                    data: {
                        statusMessage: null,
                    },
                })
        }
    }
    return { dispatch }
}

const TopBar: React.FunctionComponent<ITopBarProps> = ({
    avatar,
    username,
}) => {
    const { trigger } = useNavigationModal()
    const { data } = useGetStatusMessageQuery()
    return (
        <div className="w-full px-2 h-8 flex justify-end items-center text-gray-600 leading-none flex-shrink-0">
            <p className="mx-1">{data?.statusMessage}</p>
            <img
                src={avatar}
                alt="userAvatar"
                className="mx-1 h-5 rounded-full"
            />
            <p className="mx-1">{username}</p>
            <p className="mx-1 text-gray-400">|</p>
            <Tooltip title="Navigate anywhere (⌘ + k)" placement="bottomLeft">
                <div className="mx-1 cursor-pointer" onClick={trigger}>
                    <SearchIcon
                        className="text-gray-600"
                        height={14}
                        width={14}
                    />
                </div>
            </Tooltip>
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
