import { AutoComplete } from 'antd'
import * as React from 'react'
import ReactModal from 'react-modal'
import {
    GetSectionsQuery,
    useGetSectionsQuery,
} from '../../../../generated/types'
import { SelectValue } from 'antd/lib/select'
import SpaceIcon from '../../../../../public/pictograms/space.svg'
import InboxIcon from '../../../../../public/pictograms/inbox.svg'
import { ItemDestination, DestinationType } from './hooks'

const { Option } = AutoComplete

export interface Props {
    isOpen: boolean
    authUserId: string
    onCancel: () => void
    onMoveItem?: (itemId: string, destination: ItemDestination) => void
    itemId?: string
    onDone: () => void
}

const getIcon = (type: DestinationType) => {
    switch (type) {
        case 'inbox':
            return <InboxIcon className="fill-current text-gray-500" />
        case 'collection':
            return <SpaceIcon className="fill-current text-gray-500" />
    }
}

const renderOption = (item: ItemDestination) => {
    const Icon = getIcon(item.type)
    return (
        <Option key={item.destinationId} label={item.title} className="py-3">
            <div className="flex flex-row leading-none items-center">
                <div className="flex-shrink-0">{Icon}</div>
                <span className="truncate ml-2">{item.title}</span>
            </div>
        </Option>
    )
}

const inboxDestination: ItemDestination = {
    type: 'inbox' as DestinationType,
    destinationId: 'Me',
    title: 'Inbox',
}

export default ({
    authUserId,
    onMoveItem,
    itemId,
    isOpen,
    onDone,
    onCancel,
}: Props) => {
    const [datasource, setDatasource] = React.useState<ItemDestination[]>([])

    const { data, loading } = useGetSectionsQuery({
        variables: { authUserId },
    })

    const getCollections = (query: GetSectionsQuery) => {
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

    React.useEffect(() => {
        if (data !== undefined) {
            setDatasource([inboxDestination].concat(getCollections(data)))
        }
    }, [itemId])

    if (data === undefined || data?.sections === undefined || loading) {
        return <div> Loading ... </div>
    }

    const handleSearch = (value: string) => {
        setDatasource(
            [inboxDestination]
                .concat(getCollections(data))
                .filter(x =>
                    x.title.toLowerCase().includes(value.toLowerCase())
                )
        )
    }

    const onSelect = (value: SelectValue) => {
        if (itemId === undefined || onMoveItem === undefined) {
            throw new Error(`Can not move item itemId ${itemId}`)
        }
        const destinationId = value.toString()
        onMoveItem(
            itemId,
            datasource.filter(x => x.destinationId === destinationId)[0]
        )
        onDone()
    }

    return (
        <ReactModal
            shouldCloseOnEsc={true}
            onRequestClose={onCancel}
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
            <div className="flex flex-col bg-gray-200 w-full rounded-lg p-2">
                <AutoComplete
                    onSelect={onSelect}
                    onSearch={handleSearch}
                    className="w-full flex-shrink"
                    dataSource={datasource.map(renderOption)}
                    open={true}
                    optionLabelProp="label"
                >
                    <input
                        autoComplete="off"
                        className="shadow flex-1 rounded-sm px-4 h-8 focus:outline-none"
                        name="title"
                        placeholder={`Move to`}
                    />
                </AutoComplete>
            </div>
        </ReactModal>
    )
}
