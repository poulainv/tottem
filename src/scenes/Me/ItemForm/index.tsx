import classNames from 'classnames'
import { useReducer } from 'react'
import Spinner from '../../../components/Spinner'
import AddButton, { AddActions } from './AddButton'
import { useItemForm } from './hooks'

interface StateProps {
    type: 'url' | 'search' | 'close'
    searchElement?: 'book' | 'movie'
    isShow: boolean
}

const useAddItemReducer = () => {
    const initialState: StateProps = {
        type: 'url',
        isShow: false,
    }
    const reducer = (
        state: StateProps,
        action: AddActions | 'close'
    ): StateProps => {
        switch (action) {
            case 'close':
                return { ...state, isShow: false }
            case 'url':
                return { ...state, isShow: true, type: 'url' }
            case 'search-book':
                return {
                    isShow: true,
                    type: 'search',
                    searchElement: 'book',
                }
            case 'search-movie':
                return {
                    isShow: true,
                    type: 'search',
                    searchElement: 'movie',
                }
            default:
                throw Error()
        }
    }

    return useReducer(reducer, initialState)
}

export default ({
    collectionId,
    className,
}: {
    collectionId?: string
    className?: string
}) => {
    const { register, onSubmit, loading, errors } = useItemForm(collectionId)
    const [state, dispatch] = useAddItemReducer()
    return (
        <div className={classNames('relative h-8', className)}>
            <div className="absolute bottom-0 -left-4">
                {loading ? (
                    <Spinner size={32} />
                ) : (
                    <AddButton onSelect={dispatch} />
                )}
            </div>
            {state.isShow && (
                <form
                    id="items-form"
                    onSubmit={onSubmit}
                    className={`flex flex-1 flex-row content-center`}
                >
                    <input
                        autoFocus={true}
                        className="shadow flex-1 rounded-sm px-4 h-8 focus:outline-none"
                        name="url"
                        placeholder={`https://`}
                        ref={register({
                            required:
                                '🙏 HTTP ou HTTPS... mais au moins une URL 🙏',
                            pattern: {
                                value: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i,
                                message: '🙏 Seules les URLs sont acceptées 🙏',
                            },
                        })}
                    />
                    <div className="ml-6">
                        <button className="px-4 py-2 bg-brand-600 h-8 font-medium rounded-sm text-white leading-none hover:bg-brand-400">
                            Save
                        </button>
                    </div>
                    <div className="ml-2">
                        <button
                            type="reset"
                            onClick={() => dispatch('close')}
                            className="px-4 py-2 border border-brand-600 font-medium text-brand-600 h-8 rounded-sm leading-none "
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}
            <p className="text-red-700 mt-2">
                {errors.url && errors.url.message}
            </p>
        </div>
    )
}
