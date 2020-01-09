import { AutoComplete } from 'antd'
import { SelectValue } from 'antd/lib/select'
import { useRouter } from 'next/router'
import * as React from 'react'
import { GlobalHotKeys } from 'react-hotkeys'
import ReactModal from 'react-modal'
import classNames from 'classnames'
import InboxIcon from '../../../../../public/pictograms/inbox.svg'
import SpaceIcon from '../../../../../public/pictograms/space.svg'
import CollectionIcon from '../../../../../public/pictograms/collection.svg'
import {
    GetSectionsQuery,
    useGetSectionsQuery,
} from '../../../../generated/types'
const { Option } = AutoComplete

const keyMap = {
    OPEN_NAVIGATE: 'cmd+k',
    CLOSE_NAVIGATE: 'Escape',
}

interface PageType {
    title: string
    id?: string
    type: 'inbox' | 'collection' | 'section'
}

const getIcon = (type: 'inbox' | 'collection' | 'section') => {
    switch (type) {
        case 'inbox':
            return <InboxIcon className="fill-current text-gray-500" />
        case 'collection':
            return <CollectionIcon className="fill-current text-gray-300" />
        case 'section':
            return <SpaceIcon className="fill-current text-gray-400" />
    }
}

const renderOption = (dest: PageType) => {
    const Icon = getIcon(dest.type)
    return (
        <Option key={dest.id} label={dest.title} className="py-2">
            <div className="flex flex-row leading-none items-center justify-between">
                <div className="flex flex-row flex-start leading-none items-center flex-shrink w-11/12">
                    <div className="flex-shrink-0">{Icon}</div>
                    <span
                        className={classNames('truncate ml-2 flex-shrink', {
                            'font-semibold':
                                dest.type === 'inbox' ||
                                dest.type === 'section',
                        })}
                    >
                        {dest.title}
                    </span>
                </div>
            </div>
        </Option>
    )
}

const inboxPage: PageType = {
    type: 'inbox',
    id: 'inbox',
    title: 'Inbox',
}

const getInitialDatasource = (query: GetSectionsQuery) => {
    const collections = query?.sections
        .flatMap(x => x.collections)
        .filter(x => x !== undefined)
        .map(x => {
            return {
                id: x.id,
                title: x.title || 'New collection',
                type: 'collection',
            } as PageType
        })
    const sections = query?.sections
        .filter(x => x !== undefined)
        .map(x => {
            return {
                id: x.id,
                title: x.title || 'New space',
                type: 'section',
            } as PageType
        })
    const userPages = sections
        .concat(collections)
        .sort((a, b) => a.title.localeCompare(b.title)) // FIXME here!
    return [inboxPage].concat(userPages)
}

interface Props {
    authUserId: string
}

export default ({ authUserId }: Props) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [datasource, setDatasource] = React.useState<PageType[]>([])
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
        CLOSE_NAVIGATE: () => setIsOpen(false),
    }

    if (data === undefined || data?.sections === undefined || loading) {
        return <div> Loading ... </div>
    }

    const handleClose = () => {
        setIsOpen(false)
        setDatasource(getInitialDatasource(data))
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
        const id = value.toString()
        const dest = datasource.filter(x => x.id === id)[0]
        if (dest.type === 'collection') {
            router.push('/me/c/[collectionId]', `/me/c/${id}`)
        } else if (dest.type === 'section') {
            router.push('/me/s/[sectionId]', `/me/s/${id}`)
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
                onRequestClose={handleClose}
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
                        onDropdownVisibleChange={handleClose}
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
