import React, { Children, ReactNode } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

interface IButton {
    primary?: boolean
    children: ReactNode
    onClick?: () => void
}

export const StyledButton = ({ primary, children, onClick }: IButton) => {
    return (
        <button
            onClick={onClick}
            className={classNames(
                'border border-transparent bg-brand-600 px-4 py-2 font-semibold text-sm focus:outline-none inline-block text-center w-auto text-white rounded-md hover:bg-brand-4   00'
            )}
        >
            {children}
        </button>
    )
}
