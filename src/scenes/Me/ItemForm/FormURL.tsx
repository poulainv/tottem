import { Fragment, Dispatch } from 'react'
import { useItemUrlForm } from './hooks'

export default ({
    collectionId,
    dispatch,
}: {
    collectionId: string
    dispatch: Dispatch<
        | 'url'
        | 'search-book'
        | 'search-movie'
        | 'close'
        | 'loading'
        | 'completed'
    >
}) => {
    const { register, onSubmit, loading, errors } = useItemUrlForm(
        collectionId,
        () => dispatch('loading'),
        () => dispatch('completed')
    )

    return (
        <Fragment>
            <form
                id="items-form"
                onSubmit={onSubmit}
                className={`flex flex-1 flex-row content-center`}
            >
                <input
                    autoFocus={true}
                    autoComplete="off"
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
        </Fragment>
    )
}
