import { ItemType } from '../../common'
import countBy from 'lodash.countby'
import { useState } from 'react'
// import Movie from '../../../../public/pictograms/movie.svg'

interface FilterBadgesProps {
    items: Array<{ id: string; type: ItemType }>
    onFilterChange: (filter: ItemType | 'All') => void
}

const commonBadgeClassNames =
    'mr-2 rounded-full hover:text-white py-1 px-2 cursor-pointer leading-none'

const Badge: React.FC<{
    type: ItemType
    count?: number
    isActive: boolean
}> = ({ type, count, isActive }) => {
    const Picto = require(`../../../../public/pictograms/${type}.svg`)

    return (
        <div
            className={`${commonBadgeClassNames} ${
                isActive ? 'bg-blue-500 text-white' : 'text-gray-700'
            } hover:bg-brand-200 flex`}
        >
            <Picto height={14} width={14} className="mr-1 fill-current" />
            <div className="self-end text-xs mt-1">{count}</div>
        </div>
    )
}

export default ({ items, onFilterChange }: FilterBadgesProps) => {
    const [active, setActive] = useState<ItemType | 'All'>('All')

    const itemsTypeCount = countBy(
        items,
        (x: { id: string; type: ItemType }) => x.type
    )

    const handleBadgeClick = (type: ItemType | 'All') => {
        setActive(type)
        onFilterChange(type)
    }

    return (
        <div className="flex text-xs">
            <div
                className={`${commonBadgeClassNames} ${active === 'All' &&
                    'bg-gray-500 text-white'} hover:bg-brand-200 flex items-center`}
                onClick={() => handleBadgeClick('All')}
            >
                All
            </div>
            {Object.entries(itemsTypeCount).map(([type, count]) => (
                <div onClick={() => handleBadgeClick(type as ItemType)}>
                    <Badge
                        type={type as ItemType}
                        count={count}
                        isActive={active === type}
                    />
                </div>
            ))}
        </div>
    )
}
