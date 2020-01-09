import classNames from 'classnames'
import AddButton, { AddActions } from '../../../../components/AddButtonItem'
import Spinner from '../../../../components/Spinner'
import { Dispatch } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

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
            <TransitionGroup>
                {isShow && (
                    <CSSTransition
                        classNames={{
                            enter: 'transform scale-y-50',
                            enterDone: 'transition-all duration-200',
                        }}
                        timeout={{ enter: 0, exit: 0 }}
                    >
                        {FormItem}
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}
