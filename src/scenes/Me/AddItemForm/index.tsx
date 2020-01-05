import classNames from 'classnames'
import AddButton, { AddActions } from '../../../components/AddButtonItem'
import Spinner from '../../../components/Spinner'
import { Dispatch } from 'react'

export default ({
    isLoading,
    dispatch,
    FormItem,
    isShow,
    className,
}: {
    isLoading: boolean
    FormItem: React.ReactNode
    isShow: boolean
    dispatch: Dispatch<AddActions>
    className?: string
}) => {
    return (
        <div className={classNames('relative h-8', className)}>
            <div className="absolute bottom-0 -left-4">
                {isLoading ? (
                    <Spinner size={32} />
                ) : (
                    <AddButton onSelect={dispatch} />
                )}
            </div>
            {isShow && FormItem}
        </div>
    )
}
