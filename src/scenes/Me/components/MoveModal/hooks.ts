import { useReducer } from 'react'

export type DestinationType = 'inbox' | 'collection'

export interface ItemDepart {
    type: DestinationType
    destinationId: string
}

export interface ItemDestination {
    title: string
    type: DestinationType
    destinationId: string
}

export interface MoveModalState {
    isOpen: boolean
    itemId?: string
    depart: ItemDepart
    onMoveItem?: (itemId: string, destination: ItemDestination) => void
}

export const useMoveItemModal = (
    depart: ItemDepart,
    handleMove: (itemId: string, destination: ItemDestination) => void
) => {
    const reducer = (
        state: MoveModalState,
        action:
            | { type: 'TRIGGER_ITEM_MOVE'; itemId: string }
            | { type: 'ITEM_MOVED' }
            | { type: 'CANCEL' }
            | { type: 'DEPART_CHANGED'; depart: ItemDepart }
    ) => {
        switch (action.type) {
            case 'DEPART_CHANGED':
                return {
                    ...state,
                    depart: action.depart,
                }
            case 'ITEM_MOVED':
                return {
                    ...state,
                    isOpen: false,
                }
            case 'CANCEL': {
                return { ...state, isOpen: false }
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
    return useReducer(reducer, { isOpen: false, depart })
}
