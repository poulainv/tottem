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
import CheckIcon from '../../../../../public/pictograms/check.svg'
import { ItemDestination, DestinationType, ItemDepart } from './hooks'

const { Option } = AutoComplete

export interface Props {
    depart: ItemDepart
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

const departEqualsDestination = (depart: ItemDepart, dest: ItemDestination) => {
    if (dest.type === 'collection') {
        return dest.destinationId === depart.destinationId
    } else {
        return dest.type === depart.type
    }
}

const renderOption = (dest: ItemDestination, depart: ItemDepart) => {
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
                {departEqualsDestination(depart, dest) && (
                    <CheckIcon className="text-brand-800 w-5 h-5" />
                )}
            </div>
        </Option>
    )
}

const inboxDestination: ItemDestination = {
    type: 'inbox' as DestinationType,
    destinationId: 'Me',
    title: 'Inbox',
}

const getCollectionsFromQuery = (query?: GetSectionsQuery) => {
    return query?.sections
        ?.flatMap(x => x.collections)
        ?.filter(x => x !== undefined)
        ?.map(x => {
            return {
                destinationId: x.id,
                title: x.title || 'New collection',
                type: 'collection' as DestinationType,
            }
        })
}

const getInitialDatasource = (query?: GetSectionsQuery) =>
    [inboxDestination].concat(getCollectionsFromQuery(query) || [])

export default ({
    depart,
    authUserId,
    onMoveItem,
    itemId,
    isOpen,
    onDone,
    onCancel,
}: Props) => {
    const [datasource, setDatasource] = React.useState<ItemDestination[]>([])
    const { data } = useGetSectionsQuery({
        variables: { authUserId },
    })
    React.useEffect(() => {
        setDatasource(getInitialDatasource(data))
    }, [itemId])

    const handleSearch = (value: string) => {
        setDatasource(
            getInitialDatasource(data).filter(x =>
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
            <div className="flex flex-col bg-gray-300 w-full rounded-lg p-3">
                <AutoComplete
                    onSelect={onSelect}
                    onSearch={handleSearch}
                    className="w-full flex-shrink"
                    dataSource={datasource.map(x => renderOption(x, depart))}
                    autoFocus={true}
                    defaultOpen={true}
                    onDropdownVisibleChange={onCancel}
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
