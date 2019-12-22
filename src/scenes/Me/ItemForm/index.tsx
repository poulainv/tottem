import classNames from 'classnames'
import { useReducer } from 'react'
import Spinner from '../../../components/Spinner'
import AddButton, { AddActions } from './AddButtonItem'
import FormSearch from './FormSearch'
import FormURL from './FormURL'

interface StateProps {
    type: 'url' | 'search' | 'close'
    searchElement?: 'book' | 'movie'
    isShow: boolean
    isLoading: boolean
}

const useAddItemReducer = () => {
    const initialState: StateProps = {
        type: 'search',
        searchElement: 'movie',
        isShow: false,
        isLoading: false,
    }
    const reducer = (
        state: StateProps,
        action: AddActions | 'close' | 'loading' | 'completed'
    ): StateProps => {
        switch (action) {
            case 'loading':
                return { ...state, isLoading: true }
            case 'completed':
                return { ...state, isLoading: false }
            case 'close':
                return { ...state, isShow: false, isLoading: false }
            case 'url':
                return { ...state, isShow: true, type: 'url', isLoading: false }
            case 'search-book':
                return {
                    isShow: true,
                    isLoading: false,
                    type: 'search',
                    searchElement: 'book',
                }
            case 'search-movie':
                return {
                    isShow: true,
                    isLoading: false,
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
    collectionId: string
    className?: string
}) => {
    const [state, dispatch] = useAddItemReducer()

    const FormItem =
        state.type === 'url' ? (
            <FormURL collectionId={collectionId} dispatch={dispatch} />
        ) : (
            (state.searchElement === 'book' ||
                state.searchElement === 'movie') && (
                <FormSearch
                    collectionId={collectionId}
                    searchType={state.searchElement}
                    dispatch={dispatch}
                />
            )
        )

    return (
        <div className={classNames('relative h-8', className)}>
            <div className="absolute bottom-0 -left-4">
                {state.isLoading ? (
                    <Spinner size={32} />
                ) : (
                    <AddButton onSelect={dispatch} />
                )}
            </div>
            {state.isShow && FormItem}
        </div>
    )
}
