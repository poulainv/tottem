import * as React from 'react'
import { Item } from '../../../generated/types'
import classNames from 'classnames'
import EditableItem from './EditableItem'
import { ModificationTrackActions } from '../../common'
import DragIcon from '../../../../public/pictograms/drag.svg'
import Options from './EditableItem/Options'

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
    const [isHover, setIsHover] = React.useState(false)
    return (
        <div
            className={classNames('flex flex-row items-end', className)}
            ref={innerRef}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            {...dragHandleProps}
        >
            <div className="flex flex-row items-center w-full flex-shrink-0">
                <div>
                    <DragIcon
                        height={10}
                        width={10}
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
            <Options
                itemId={item.id}
                className={classNames('pl-2', {
                    invisible: !isHover,
                    visible: isHover,
                })}
            />
        </div>
    )
}

export default React.memo(DraggableItem)
