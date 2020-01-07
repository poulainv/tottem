import { useReducer } from 'react'

export type DestinationType = 'inbox' | 'collection'

export interface ItemDestination {
    title: string
    type: DestinationType
    destinationId: string
}

export interface MoveModalState {
    isOpen: boolean
    itemId?: string
    onMoveItem?: (itemId: string, destination: ItemDestination) => void
}

export const useMoveItemModal = (
    handleMove: (itemId: string, destination: ItemDestination) => void
) => {
    const reducer = (
        state: MoveModalState,
        action:
            | { type: 'TRIGGER_ITEM_MOVE'; itemId: string }
            | { type: 'ITEM_MOVED' }
            | { type: 'CANCEL' }
    ) => {
        switch (action.type) {
            case 'ITEM_MOVED':
                return {
                    isOpen: false,
                }
            case 'CANCEL': {
                return { isOpen: false }
            }
            case 'TRIGGER_ITEM_MOVE':
                return {
                    ...state,
                    isOpen: true,
                    itemId: action.itemId,
                    onMoveItem: handleMove,
                }
            default:
                return { ...state, isOpen: false }
        }
    }
    return useReducer(reducer, { isOpen: false })
}
