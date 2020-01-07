import { AutoComplete } from 'antd'
import * as React from 'react'
import ReactModal from 'react-modal'
import {
    GetSectionsQuery,
    useGetSectionsQuery,
} from '../../../../generated/types'
import { SelectValue } from 'antd/lib/select'

const { Option } = AutoComplete

export interface Props {
    className?: string
    isOpen: boolean
    authUserId: string
    onMoveItem?: (
        itemId: string,
        destination: {
            type: 'inbox' | 'collection'
            destinationId: string
        }
    ) => void
    itemId?: string
    onDone: () => void
}

const renderOption = (item: { title: string; id: string }) => {
    return (
        <Option key={item.id} label={item.title}>
            <div className="global-search-item">
                <span className="global-search-item-desc">
                    Results {item.title}
                </span>
            </div>
        </Option>
    )
}

export default ({
    className,
    authUserId,
    onMoveItem,
    itemId,
    isOpen,
    onDone,
}: Props) => {
    const [datasource, setDatasource] = React.useState<
        Array<{ id: string; title: string }>
    >([])

    const getCollections = (query: GetSectionsQuery) => {
        return query?.sections
            .flatMap(x => x.collections)
            .filter(x => x !== undefined)
            .map(x => {
                return { id: x.id, title: x.title || 'New collection' }
            })
    }

    const { data, loading } = useGetSectionsQuery({
        variables: { authUserId },
        onCompleted(fetched) {
            setDatasource(getCollections(fetched))
        },
    })
    if (data === undefined || data?.sections === undefined || loading) {
        return <div> Loading ... </div>
    }

    const handleSearch = (value: string) => {
        setDatasource(
            getCollections(data).filter(x =>
                x.title.toLowerCase().includes(value.toLowerCase())
            )
        )
    }

    const onSelect = (value: SelectValue) => {
        if (itemId === undefined || onMoveItem === undefined) {
            throw new Error('Can not move item')
        }
        onMoveItem(itemId, {
            type: 'collection',
            destinationId: value.toString(),
        })
        onDone()
    }

    return (
        <ReactModal
            isOpen={isOpen}
            ariaHideApp={false} // FIXME
            style={{
                overlay: {
                    backgroundColor: 'transparent',
                },
                content: {
                    width: '320px',
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
