import * as React from 'react'
import SettingsIcon from '../../../public/pictograms/settings.svg'

export default ({}) => {
    return (
        <div>
            <div className="flex flex-row items-center">
                <SettingsIcon height={24} width={24} />
                <h1 className="text-2xl ml-2 text-gray-900 leading-none">
                    Settings
                </h1>
            </div>
        </div>
    )
}
