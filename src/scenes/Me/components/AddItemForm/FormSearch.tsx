import { AutoComplete, Select } from 'antd'
import classNames from 'classnames'
import { SearchItem } from '../../../../generated/types'
import { useItemFormSearch } from '../../Collection/ItemForm/hooks'

const { Option } = Select

const renderOption = (item: SearchItem) => {
    return (
        <Option
            key={item.id}
            label={item.title}
            className="py-2"
            data-cy="item-result-search"
        >
            <div className="flex flex-row leading-none items-center justify-between">
                <div className="flex flex-row flex-start leading-none items-center ">
                    <span>{item.title}</span>
                    {item.author && (
                        <div>
                            <span className="text-gray-500 text-sm mx-2">
                                -
                            </span>
                            <span className="text-gray-500 text-sm">
                                {item.author}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </Option>
    )
}

export default ({
    searchType,
    onClose,
    useForm,
    className,
}: {
    useForm: ReturnType<typeof useItemFormSearch>
    searchType?: 'book' | 'movie' | 'album'
    onClose: () => void
    className?: string
}) => {
    const { value, onChange, dataSource, onSelect } = useForm
    return (
        <div
            className={classNames(
                'flex flex-1 flex-row content-center',
                className
            )}
        >
            <AutoComplete
                autoFocus
                value={value}
                className="w-full flex-shrink"
                onSelect={onSelect}
                dataSource={dataSource?.map(renderOption)}
                onSearch={onChange}
            >
                <input
                    data-cy="item-search-input"
                    autoComplete="off"
                    className="shadow flex-1 rounded-sm px-4 h-8 focus:outline-none"
                    name="title"
                    placeholder={`Search for a ${searchType}...`}
                />
            </AutoComplete>
            <div className="ml-6">
                <button
                    type="reset"
                    onClick={onClose}
                    className="px-4 py-2 border border-brand-600 font-medium text-brand-600 h-8 rounded-sm leading-none "
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}
