import classNames from 'classnames'
import FormSearch from '../../AddItemForm/FormSearch'
import FormURL from '../../AddItemForm/FormURL'
import { useAddItemReducer } from '../../AddItemForm/hooks'
import { useItemFormSearch, useItemUrlForm } from './hooks'
import AddItemForm from '../../AddItemForm'

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
        <AddItemForm
            FormItem={FormItem}
            dispatch={dispatch}
            className={classNames('relative h-8', className)}
            {...state}
        />
    )
}
