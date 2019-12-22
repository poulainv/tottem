import * as React from 'react'
import classNames from 'classnames'
import { Tooltip } from 'antd'
import PlusIcon from '../../../../public/pictograms/plus.svg'
import { useRouter } from 'next/router'
import { useCreateEmptyCollectionMutation } from '../../../generated/types'

export interface Props {
    className?: string
    sectionId: string
}

export default ({ className, sectionId }: Props) => {
    const router = useRouter()
    const [createCollection] = useCreateEmptyCollectionMutation({
        variables: { sectionId },
        onCompleted: data => {
            router.push(`/me/c/${data.collection.id}`)
        },
    })

    const handleCreationCollection = () => {
        createCollection()
    }
    return (
        <Tooltip title={'Create collection in this space'}>
            <div
                onClick={() => handleCreationCollection()}
                className={classNames(
                    'h-8 w-8 rounded-full text-red-700 border border-brand-700 flex justify-center items-center cursor-pointer',
                    className
                )}
            >
                <PlusIcon className="fill-current" />
            </div>
        </Tooltip>
    )
}
