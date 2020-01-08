import { AutoComplete } from 'antd'
import { SelectValue } from 'antd/lib/select'
import { useRouter } from 'next/router'
import * as React from 'react'
import { GlobalHotKeys } from 'react-hotkeys'
import ReactModal from 'react-modal'
import InboxIcon from '../../../../../public/pictograms/inbox.svg'
import SpaceIcon from '../../../../../public/pictograms/space.svg'
import {
    GetSectionsQuery,
    useGetSectionsQuery,
} from '../../../../generated/types'
import { DestinationType, ItemDestination } from '../MoveModal/hooks'
const { Option } = AutoComplete

const keyMap = {
    OPEN_NAVIGATE: 'cmd+k',
    CLOSE_NAVIGATE: 'Escape',
}

export interface Props {
    authUserId: string
}

const getIcon = (type: DestinationType) => {
    switch (type) {
        case 'inbox':
            return <InboxIcon className="fill-current text-gray-500" />
        case 'collection':
            return <SpaceIcon className="fill-current text-gray-500" />
    }
}

const renderOption = (dest: ItemDestination) => {
    const Icon = getIcon(dest.type)
    return (
        <Option key={dest.destinationId} label={dest.title} className="py-2">
            <div className="flex flex-row leading-none items-center justify-between">
                <div className="flex flex-row flex-start leading-none items-center flex-shrink w-11/12">
                    <div className="flex-shrink-0">{Icon}</div>
                    <span className="truncate ml-2 flex-shrink">
                        {dest.title}
                    </span>
                </div>
            </div>
        </Option>
    )
}

const inboxDestination: ItemDestination = {
    type: 'inbox' as DestinationType,
    destinationId: 'inbox',
    title: 'Inbox',
}

const getCollectionsFromQuery = (query: GetSectionsQuery) => {
    return query?.sections
        .flatMap(x => x.collections)
        .filter(x => x !== undefined)
        .map(x => {
            return {
                destinationId: x.id,
                title: x.title || 'New collection',
                type: 'collection' as DestinationType,
            }
        })
}

const getInitialDatasource = (query: GetSectionsQuery) =>
    [inboxDestination].concat(getCollectionsFromQuery(query))

export default ({ authUserId }: Props) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [datasource, setDatasource] = React.useState<ItemDestination[]>([])
    const { data, loading } = useGetSectionsQuery({
        variables: { authUserId },
    })
    React.useEffect(() => {
        if (data !== undefined) {
            setDatasource(getInitialDatasource(data))
        }
    }, [])

    const handlers = {
        OPEN_NAVIGATE: () => setIsOpen(!isOpen),
        CLOSE_NAVIGATE: () => {
            setIsOpen(false)
        },
    }

    if (data === undefined || data?.sections === undefined || loading) {
        return <div> Loading ... </div>
    }

    const handleSearch = (value: string) => {
        setDatasource(
            getInitialDatasource(data).filter(x =>
                x.title.toLowerCase().includes(value.toLowerCase())
            )
        )
    }
    const router = useRouter()
    const onSelect = (value: SelectValue) => {
        const destinationId = value.toString()
        const dest = datasource.filter(
            x => x.destinationId === destinationId
        )[0]
        if (dest.type === 'collection') {
            router.push('/me/c/[collectionId]', `/me/c/${destinationId}`)
        } else if (dest.type === 'inbox') {
            router.push('/me/inbox')
        } else {
            throw new Error(`Type ${dest.type} not implemented`)
        }
    }

    return (
        <React.Fragment>
            <GlobalHotKeys handlers={handlers} keyMap={keyMap} />
            <ReactModal
                shouldCloseOnEsc={true}
                onRequestClose={() => setIsOpen(false)}
                isOpen={isOpen}
                ariaHideApp={false} // FIXME
                style={{
                    overlay: {
                        backgroundColor: 'transparent',
                    },
                    content: {
                        width: '348px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        left: '0',
                        right: '0',
                        backgroundColor: 'transparent',
                        padding: '0',
                        border: 'none',
                    },
                }}
            >
                <div className="flex flex-col bg-brand-400 w-full rounded-lg p-3">
                    <AutoComplete
                        onSelect={onSelect}
                        onSearch={handleSearch}
                        className="w-full flex-shrink"
                        dataSource={datasource.map(x => renderOption(x))}
                        autoFocus={true}
                        defaultOpen={true}
                        onDropdownVisibleChange={() => setIsOpen(false)}
                        optionLabelProp="label"
                    >
                        <input
                            autoComplete="off"
                            className="shadow flex-1 rounded-sm px-4 h-8 focus:outline-none"
                            name="title"
                            placeholder={`Navigate to`}
                        />
                    </AutoComplete>
                </div>
            </ReactModal>
        </React.Fragment>
    )
}
