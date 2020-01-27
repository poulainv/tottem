import { Fragment } from 'react'
import { useItemUrlForm } from '../../Collection/ItemForm/hooks'
import classNames from 'classnames'

export default ({
    useForm,
    onClose,
    className,
}: {
    useForm: ReturnType<typeof useItemUrlForm>
    onClose: () => void
    className?: string
}) => {
    const { register, onSubmit, errors } = useForm
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
                <input
                    data-cy="item-url-input"
                    autoFocus
                    autoComplete="off"
                    className="shadow flex-1 rounded-sm px-4 h-8 focus:outline-none"
                    name="url"
                    placeholder={`https://`}
                    ref={register({
                        required:
                            '🙏 HTTP ou HTTPS... mais au moins une URL 🙏',
                        pattern: {
                            value: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,7}(:[0-9]{1,5})?(\/.*)?$/i,
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
                        onClick={onClose}
                        className="px-4 py-2 border border-brand-600 font-medium text-brand-600 h-8 rounded-sm leading-none "
                    >
                        Cancel
                    </button>
                </div>
            </form>
            <p className="text-red-700 mt-2">
                {errors.url && errors.url.message}
            </p>
        </Fragment>
    )
}
