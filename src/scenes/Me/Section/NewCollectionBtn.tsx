import { Tooltip } from 'antd'
import classNames from 'classnames'
import * as React from 'react'
import PlusIcon from '../../../../public/pictograms/plus.svg'
import { useCreateEmptyCollection } from '../Collection/hooks'

export interface Props {
    className?: string
    sectionId: string
    authUserId: string
}

export default ({ className, sectionId, authUserId }: Props) => {
    const [createCollection] = useCreateEmptyCollection(sectionId, authUserId)
    return (
        <Tooltip title={'Create collection in this space'}>
            <div
                data-cy="new-collection"
                onClick={() => createCollection()}
                className={classNames(
                    'h-8 w-8 text-gray-600 rounded-full border border-gray-600 hover:border-gray-900 hover:text-gray-900 flex justify-center items-center cursor-pointer',
                    className
                )}
            >
                <PlusIcon height={16} width={16} className="fill-current" />
            </div>
        </Tooltip>
    )
}
