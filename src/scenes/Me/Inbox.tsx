import * as React from 'react'
import InboxIcon from '../../../public/pictograms/inbox.svg'

export default ({}) => {
    return (
        <div>
            <div className="flex flex-row items-center">
                <InboxIcon height={24} width={24} />
                <h1 className="text-2xl ml-2 text-gray-900 leading-none">
                    Inbox
                </h1>
            </div>
        </div>
    )
}
