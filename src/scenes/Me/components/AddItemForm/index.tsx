import classNames from 'classnames'
import AddButton, { AddActions } from './AddButtonItem'
import Spinner from '../../../../components/Spinner'
import { Dispatch } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { HotKeys, ObserveKeys } from 'react-hotkeys'
import { navigateKeyMap } from '../NavigateModal/hooks'
import { addItemKeyMap } from './hooks'

export default ({
    children,
    isLoading,
    dispatch,
    isShow,
    className,
}: {
    children: React.ReactNode
    isLoading: boolean
    isShow: boolean
    dispatch: Dispatch<AddActions>
    className?: string
}) => {
    const keyMap = {
        ...navigateKeyMap,
        ...addItemKeyMap,
    }
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
                        {/* 
                            Have to reinject hotkey 
                            Not sufficient because once typing hotkey not triggered
                            https://github.com/greena13/react-hotkeys/issues/259 
                        */}
                        <HotKeys keyMap={keyMap} className="w-full flex-shrink">
                            <ObserveKeys className="w-full">
                                {children}
                            </ObserveKeys>
                        </HotKeys>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}
