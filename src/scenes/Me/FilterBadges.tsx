import { ItemType } from '../common'
import countBy from 'lodash.countby'
import { useReducer, useEffect } from 'react'
import classNames from 'classnames'
import { PictogramItems } from '../../components/PictogramItems'

interface FilterBadgesProps {
    items: Array<{ id: string; type: ItemType; isArchived: boolean }>
    onFilterChange: (filter: ItemType[]) => void
    collectionId: string
    className: string
}

const Badge: React.FC<{
    type: ItemType
    count?: number
    isActive: boolean
}> = ({ type, count, isActive }) => {
    const BadgeImg = PictogramItems[type]
    return (
        <div
            className={classNames(
                'mr-1 rounded-full border border-transparent flex py-1 px-2 cursor-pointer leading-none',
                {
                    'bg-brand-300 text-white hover:bg-brand-300': isActive,
                    'text-gray-700 hover:border-gray-500': !isActive,
                }
            )}
        >
            <BadgeImg height={14} width={14} className="mr-1 fill-current" />
            <div className="self-end text-xs mt-1">{count}</div>
        </div>
    )
}

export default ({
    items,
    onFilterChange,
    collectionId,
    className,
}: FilterBadgesProps) => {
    const nonArchivedItems = items.filter(x => !x.isArchived)
    const reducer = (state: ItemType[], action: ItemType | 'ALL') => {
        switch (action) {
            case 'ALL':
                state = []
                break
            default:
                state = [action]
        }
        onFilterChange(state)

        return state
    }

    const [filters, dispatch] = useReducer(reducer, [])

    const itemsTypeCount = countBy(
        nonArchivedItems,
        (x: { id: string; type: ItemType }) => x.type
    )

    useEffect(() => {
        return () => {
            dispatch('ALL') // FIXME by storing filters
        }
    }, [collectionId])

    return (
        <div className={classNames('flex text-xs', className)}>
            <div
                className={`mr-2 rounded-full border border-transparent hover:border-gray-500 py-1 px-2 cursor-pointer leading-none ${
                    !filters.length ? 'bg-gray-500 text-white' : 'text-gray-700'
                } flex items-center`}
                onClick={() => dispatch('ALL')}
            >
                All
            </div>
            {Object.entries(itemsTypeCount).map(([type, count]) => (
                <div key={type} onClick={() => dispatch(type as ItemType)}>
                    <Badge
                        type={type as ItemType}
                        count={count}
                        isActive={filters.includes(type as ItemType)}
                    />
                </div>
            ))}
        </div>
    )
}
