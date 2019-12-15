import { ItemType } from '../../common'
import countBy from 'lodash.countby'
import { useReducer } from 'react'

interface FilterBadgesProps {
    items: Array<{ id: string; type: ItemType }>
    onFilterChange: (filter: Array<ItemType>) => void
}

const Badge: React.FC<{
    type: ItemType
    count?: number
    isActive: boolean
}> = ({ type, count, isActive }) => {
    const Picto = require(`../../../../public/pictograms/${type}.svg`)

    return (
        <div
            className={`mr-2 rounded-full hover:text-white py-1 px-2 cursor-pointer leading-none ${
                isActive ? 'bg-blue-300 text-white' : 'text-gray-700'
            } hover:bg-brand-200 flex`}
        >
            <Picto height={14} width={14} className="mr-1 fill-current" />
            <div className="self-end text-xs mt-1">{count}</div>
        </div>
    )
}

export default ({ items, onFilterChange }: FilterBadgesProps) => {
    const reducer = (state: Array<ItemType>, action?: ItemType) => {
        switch (action) {
            case undefined:
                state = []
                break
            default:
                state = state.includes(action)
                    ? state.filter(a => a !== action)
                    : state.concat(action)
        }
        onFilterChange(state)

        return state
    }

    const [state, dispatch] = useReducer(reducer, [])

    const itemsTypeCount = countBy(
        items,
        (x: { id: string; type: ItemType }) => x.type
    )

    const handleBadgeClick = (type?: ItemType) => {
        dispatch(type)
    }

    return (
        <div className="flex text-xs">
            <div
                className={`mr-2 rounded-full hover:text-white py-1 px-2 cursor-pointer leading-none ${!state.length &&
                    'bg-gray-500 text-white'} hover:bg-brand-200 flex items-center`}
                onClick={() => handleBadgeClick()}
            >
                All
            </div>
            {Object.entries(itemsTypeCount).map(([type, count]) => (
                <div onClick={() => handleBadgeClick(type as ItemType)}>
                    <Badge
                        type={type as ItemType}
                        count={count}
                        isActive={state.includes(type as ItemType)}
                    />
                </div>
            ))}
        </div>
    )
}
