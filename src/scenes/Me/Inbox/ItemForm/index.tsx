import classNames from 'classnames'
import FormSearch from '../../components/AddItemForm/FormSearch'
import FormURL from '../../components/AddItemForm/FormURL'
import { useAddItemReducer } from '../../components/AddItemForm/hooks'
import { useItemFormSearch, useItemUrlForm } from './hooks'
import AddItemForm from '../../components/AddItemForm'
import { Fragment } from 'react'
import { GlobalHotKeys, ObserveKeys } from 'react-hotkeys'

const keyMap = {
    ADD_URL: 'Control+i',
    SEARCH_BOOK: 'Control+b',
    SEARCH_MOVIE: 'Control+m',
}

export default ({ className }: { className?: string }) => {
    const [state, dispatch] = useAddItemReducer()

    const useFormSearch = useItemFormSearch(
        state.searchElement || 'book',
        () => dispatch('loading'),
        () => dispatch('completed')
    )

    const useFormURL = useItemUrlForm(
        () => dispatch('loading'),
        () => dispatch('completed')
    )

    const handlers = {
        ADD_URL: () => dispatch('url'),
        SEARCH_BOOK: () => dispatch('search-book'),
        SEARCH_MOVIE: () => dispatch('search-movie'),
    }

    const FormItem =
        state.type === 'url' ? (
            <FormURL useForm={useFormURL} onClose={() => dispatch('close')} />
        ) : (
            (state.searchElement === 'book' ||
                state.searchElement === 'movie') && (
                <FormSearch
                    useForm={useFormSearch}
                    searchType={state.searchElement}
                    onClose={() => dispatch('close')}
                />
            )
        )

    return (
        <Fragment>
            <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
            <ObserveKeys>
                <AddItemForm
                    FormItem={FormItem}
                    dispatch={dispatch}
                    className={classNames('relative h-8', className)}
                    {...state}
                />
            </ObserveKeys>
        </Fragment>
    )
}
