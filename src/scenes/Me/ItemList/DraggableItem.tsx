import * as React from 'react'
import { Item } from '../../../generated/types'
import classNames from 'classnames'
import EditableItem from './EditableItem'
import { ModificationTrackActions } from '../../common'
import DragIcon from '../../../../public/pictograms/drag.svg'
import ArchivedIcon from '../../../../public/pictograms/archived.svg'
import MoveIcon from '../../../../public/pictograms/move.svg'
import DeleteIcon from '../../../../public/pictograms/delete.svg'
import { Tooltip } from 'antd'
import { useDeleteItem } from './hooks'

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
    const { handleDelete } = useDeleteItem()
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
            <div className="text-gray-500 pl-2 flex flex-col items-center justify-end content-end py-1">
                <Tooltip
                    title="Move to"
                    placement="right"
                    mouseEnterDelay={0.3}
                    mouseLeaveDelay={0}
                >
                    <MoveIcon
                        height={14}
                        width={14}
                        className={classNames('mt-2 cursor-pointer ', {
                            invisible: !isHover,
                            visible: isHover,
                        })}
                    />
                </Tooltip>
                <Tooltip
                    title="Archive"
                    placement="right"
                    mouseEnterDelay={0.3}
                    mouseLeaveDelay={0}
                >
                    <ArchivedIcon
                        height={14}
                        width={14}
                        className={classNames('mt-2 cursor-pointer ', {
                            invisible: !isHover,
                            visible: isHover,
                        })}
                    />
                </Tooltip>
                <Tooltip
                    title="Delete"
                    placement="right"
                    mouseEnterDelay={0.3}
                    mouseLeaveDelay={0}
                >
                    <DeleteIcon
                        onClick={() => handleDelete(item.id)}
                        height={16}
                        width={16}
                        className={classNames('mt-2 cursor-pointer ', {
                            invisible: !isHover,
                            visible: isHover,
                        })}
                    />
                </Tooltip>
            </div>
        </div>
    )
}

export default React.memo(DraggableItem)
