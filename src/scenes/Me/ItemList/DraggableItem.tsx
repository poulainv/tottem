import * as React from 'react'
import { Item } from '../../../generated/types'
import classNames from 'classnames'
import EditableItem from './EditableItem'
import { ModificationTrackActions } from '../../common'
import DragPictogram from '../../../../public/pictograms/drag.svg'

const DraggableItem: React.FunctionComponent<{
    item: Item
    innerRef: any
    className?: string
} & ModificationTrackActions> = ({
    item,
    innerRef,
    className,
    onChange,
    onSaved,
    onSaving,
    ...dragHandleProps
}) => {
    const [isHover, setIsHover] = React.useState(true)
    // const handleDelete = useDeleteItem()

    return (
        <div
            className={classNames('flex flex-row items-center', className)}
            ref={innerRef}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            {...dragHandleProps}
        >
            <div>
                <DragPictogram
                    height={10}
                    className={classNames('-ml-4', {
                        invisible: !isHover,
                        visible: isHover,
                    })}
                />
            </div>
            <EditableItem
                item={item}
                onChange={onChange}
                onSaved={onSaved}
                onSaving={onSaving}
            />
        </div>
    )
}

export default React.memo(DraggableItem)
