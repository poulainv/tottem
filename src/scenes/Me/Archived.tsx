import * as React from 'react'
import ArchivedIcon from '../../../public/pictograms/archived.svg'

export default ({}) => {
    return (
        <div>
            <div className="flex flex-row items-center">
                <ArchivedIcon
                    style={{ color: '#3F55C9' }}
                    height={24}
                    width={24}
                />
                <h1 className="text-2xl ml-2 text-gray-900 leading-none">
                    Archived
                </h1>
            </div>
        </div>
    )
}
