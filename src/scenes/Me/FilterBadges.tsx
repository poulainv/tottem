import { ItemType } from '../common'
import countBy from 'lodash.countby'
import { useReducer, useEffect } from 'react'
import classNames from 'classnames'
import { PictogramItems } from '../../components/PictogramItems'
import { Tooltip } from 'antd'
import { useGetItemsQuery } from '../../generated/types'

interface FilterBadgesProps {
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

const useItems = (
    collectionId: string,
    onFilterChange: (filter: ItemType[]) => void
) => {
    const { data } = useGetItemsQuery({
        variables: {
            collectionId,
        },
    })
    const nonArchivedItems = data?.items?.filter(x => !x.isArchived)
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
        nonArchivedItems,
        (x: { id: string; type: ItemType }) => x.type
    )

    useEffect(() => {
        return () => {
            dispatch('ALL') // FIXME by storing filters
        }
    }, [collectionId])

    return { itemsTypeCount, filters, dispatch }
}

export default ({
    onFilterChange,
    collectionId,
    className,
}: FilterBadgesProps) => {
    const { itemsTypeCount, filters, dispatch } = useItems(
        collectionId,
        onFilterChange
    )

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
                        title={type}
                        mouseEnterDelay={0.8}
                        mouseLeaveDelay={0}
                    >
                        <span>
                            <Badge
                                type={type as ItemType}
                                count={count}
                                isActive={filters.includes(type as ItemType)}
                            />
                        </span>
                    </Tooltip>
                </div>
            ))}
        </div>
    )
}
