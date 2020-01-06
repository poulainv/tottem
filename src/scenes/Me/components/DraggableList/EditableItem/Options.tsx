import * as React from 'react'
import ArchivedIcon from '../../../../../../public/pictograms/archived.svg'
import MoveIcon from '../../../../../../public/pictograms/move.svg'
import DeleteIcon from '../../../../../../public/pictograms/delete.svg'
import classNames from 'classnames'
import { useDeleteItem } from '../hooks'
import { Tooltip } from 'antd'

export interface IOptionsProps {
    className?: string
    itemId: string
}

export default ({ className, itemId }: IOptionsProps) => {
    const { handleDelete } = useDeleteItem()
    return (
        <div
            className={classNames(
                'text-gray-500 flex flex-col items-center justify-end content-end py-1',
                className
            )}
        >
            <Tooltip
                title="Move to"
                placement="right"
                mouseEnterDelay={0.3}
                mouseLeaveDelay={0}
            >
                <MoveIcon
                    height={14}
                    width={14}
                    className={classNames('mt-2 cursor-pointer ')}
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
                    className={classNames('mt-2 cursor-pointer ')}
                />
            </Tooltip>
            <Tooltip
                title="Delete"
                placement="right"
                mouseEnterDelay={0.3}
                mouseLeaveDelay={0}
            >
                <DeleteIcon
                    onClick={() => handleDelete(itemId)}
                    height={16}
                    width={16}
                    className={classNames('mt-2 cursor-pointer ')}
                />
            </Tooltip>
        </div>
    )
}
