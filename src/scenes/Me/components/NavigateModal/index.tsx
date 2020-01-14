import { AutoComplete } from 'antd'
import classNames from 'classnames'
import { useState, useEffect, Fragment } from 'react'
import { GlobalHotKeys } from 'react-hotkeys'
import ReactModal from 'react-modal'
import CollectionIcon from '../../../../../public/pictograms/collection.svg'
import InboxIcon from '../../../../../public/pictograms/inbox.svg'
import SpaceIcon from '../../../../../public/pictograms/space.svg'
import {
    PageType,
    usePageNavigation,
    useNavigationModal,
    navigateKeyMap,
} from './hooks'
import { SelectValue } from 'antd/lib/select'
const { Option } = AutoComplete

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

interface Props {
    authUserId: string
}

export default ({ authUserId }: Props) => {
    const { pages, navigateTo } = usePageNavigation(authUserId)
    const [datasource, setDatasource] = useState<PageType[]>(pages)
    const { isOpen, onRequestClose, handlers } = useNavigationModal()

    useEffect(() => {
        setDatasource(pages)
    }, [pages])

    const handleClose = () => {
        setDatasource(pages)
        onRequestClose()
    }

    const handleSearch = (value: string) => {
        setDatasource(
            pages.filter(x =>
                x.title.toLowerCase().includes(value.toLowerCase())
            )
        )
    }

    const handleSelect = (v: SelectValue) => {
        navigateTo(v.toString())
    }

    return (
        <Fragment>
            <GlobalHotKeys handlers={handlers} keyMap={navigateKeyMap} />
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
                        onSelect={handleSelect}
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
        </Fragment>
    )
}
