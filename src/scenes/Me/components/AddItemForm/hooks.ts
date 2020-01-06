import { useReducer } from 'react'
import { AddActions } from '../../../../components/AddButtonItem'

interface StateProps {
    type: 'url' | 'search' | 'close'
    searchElement?: 'book' | 'movie'
    isShow: boolean
    isLoading: boolean
}

export const useAddItemReducer = () => {
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
