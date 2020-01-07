import * as React from 'react'
import classNames from 'classnames'
import { Tooltip } from 'antd'
import PlusIcon from '../../../../public/pictograms/plus.svg'
import Router from 'next/router'
import {
    useCreateEmptyCollectionMutation,
    GetSectionsDocument,
    GetSectionsQuery,
} from '../../../generated/types'
import { useSideNav } from '../components/Sidenav/hooks'

export interface Props {
    className?: string
    sectionId: string
    authUserId: string
}

export default ({ className, sectionId, authUserId }: Props) => {
    const [createCollection] = useCreateEmptyCollectionMutation({
        variables: { sectionId },
        onCompleted: data => {
            Router.push('/me/c/[collectionId]', `/me/c/${data.collection.id}`)
        },
        refetchQueries: [
            { query: GetSectionsDocument, variables: { authUserId } },
        ],
    })

    const handleCreationCollection = () => {
        createCollection()
    }
    return (
        <Tooltip title={'Create collection in this space'}>
            <div
                onClick={() => handleCreationCollection()}
                className={classNames(
                    'h-8 w-8 text-brand-700 rounded-full border border-brand-700 hover:border-brand-900 hover:text-brand-900 flex justify-center items-center cursor-pointer',
                    className
                )}
            >
                <PlusIcon className="fill-current" />
            </div>
        </Tooltip>
    )
}
