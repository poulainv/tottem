import React, { Children, ReactNode } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

interface IButton {
    primary?: boolean
    className?: string
    type?: string
    children: ReactNode
    onClick?: () => void
}

export const StyledButton = ({
    primary = true,
    className,
    children,
    onClick,
}: IButton) => {
    return (
        <button
            onClick={onClick}
            className={classNames(
                className,
                'px-4 py-2 font-semibold text-sm focus:outline-none inline-block text-center w-auto rounded-md ',
                {
                    'bg-brand-600 border border-transparent hover:bg-brand-400 text-white': primary,
                    'bg-white border border-gray-600 hover:bg-gray-200 text-gray-700': !primary,
                }
            )}
        >
            {children}
        </button>
    )
}
