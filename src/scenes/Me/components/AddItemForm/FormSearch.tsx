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
    const { register, onSubmit, errors, onChange, dataSource } = useForm
    return (
        <Fragment>
            <form
                id="items-form"
                onSubmit={onSubmit}
                className={classNames(
                    'flex flex-1 flex-row content-center',
                    className
                )}
            >
                <AutoComplete
                    autoFocus
                    className="w-full flex-shrink"
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
                        ref={register}
                    />
                </AutoComplete>
                <div className="ml-6">
                    <button className="px-4 py-2 bg-brand-600 h-8 font-medium rounded-sm text-white leading-none hover:bg-brand-400">
                        Save
                    </button>
                </div>
                <div className="ml-2">
                    <button
                        type="reset"
                        onClick={onClose}
                        className="px-4 py-2 border border-brand-600 font-medium text-brand-600 h-8 rounded-sm leading-none "
                    >
                        Cancel
                    </button>
                </div>
            </form>
            <p className="text-red-700 mt-2">{errors.title?.message}</p>
        </Fragment>
    )
}
