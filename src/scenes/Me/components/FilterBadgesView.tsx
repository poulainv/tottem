import { Tooltip } from 'antd'
import classNames from 'classnames'
import countBy from 'lodash.countby'
import { Fragment, useEffect, useReducer } from 'react'
import { PictogramItems } from '../../../components/PictogramItems'
import {
    ItemDetailFragment,
    ItemPreviewFragment,
} from '../../../generated/types'
import { ItemType } from '../../common'

interface FilterBadgesProps {
    listId: string
    onFilterChange: (filter: ItemType[]) => void
    className?: string
    items?: Array<ItemPreviewFragment & ItemDetailFragment>
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

const useFilters = (
    listId: string,
    onFilterChange: (filter: ItemType[]) => void,
    items?: Array<ItemPreviewFragment & ItemDetailFragment>
) => {
    const nonDeletedItems = items?.filter(x => !x.isDeleted)
    const reducer = (state: ItemType[], action: ItemType | 'ALL') => {
        switch (action) {
            case 'ALL':
                state = []
                break
            default:
                state = state.includes(action) ? [] : [action]
        }
        onFilterChange(state)

        return state
    }

    const [filters, dispatch] = useReducer(reducer, [])

    const itemsTypeCount = countBy(
        nonDeletedItems,
        (x: { id: string; type: ItemType }) => x.type
    )

    useEffect(() => {
        return () => {
            dispatch('ALL') // FIXME by storing filters
        }
    }, [listId])

    return { itemsTypeCount, filters, dispatch }
}

export default ({
    onFilterChange,
    listId,
    items,
    className,
}: FilterBadgesProps) => {
    const { itemsTypeCount, filters, dispatch } = useFilters(
        listId,
        onFilterChange,
        items
    )

    if (Object.keys(itemsTypeCount).length === 0) {
        return <Fragment />
    }

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
                    <Tooltip
                        overlayClassName="capitalize"
                        title={type}
                        mouseEnterDelay={0.8}
                        mouseLeaveDelay={0}
                    >
                        <span>
                            <Badge
                                type={type as ItemType}
                                count={count} // FIXME
                                isActive={filters.includes(type as ItemType)}
                            />
                        </span>
                    </Tooltip>
                </div>
            ))}
        </div>
    )
}
