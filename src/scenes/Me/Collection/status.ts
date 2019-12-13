import * as React from 'react'

export const useStatusMessage = () => {
    const reducer = (_: string, action: 'SAVED' | 'SAVING' | 'CHANGED') => {
        switch (action) {
            case 'SAVED':
                return 'Saved!'
            case 'SAVING':
                return 'Saving...'
            default:
                return ''
        }
    }
    return React.useReducer(reducer, '')
}
