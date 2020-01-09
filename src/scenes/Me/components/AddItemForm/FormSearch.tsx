import { AutoComplete } from 'antd'
import { Fragment } from 'react'
import { useItemFormSearch } from '../../Collection/ItemForm/hooks'
import classNames from 'classnames'

export default ({
    searchType,
    onClose,
    useForm,
    className,
}: {
    useForm: ReturnType<typeof useItemFormSearch>
    searchType?: 'book' | 'movie'
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
                dataSource={
                    dataSource &&
                    new Array(...new Set(dataSource.map(x => x.title)))
                }
                onSearch={onChange}
            >
                <input
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
