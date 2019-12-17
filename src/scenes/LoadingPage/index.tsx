import * as React from 'react'
import Spinner from '../../components/Spinner'

export default () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <Spinner size={36} />
        </div>
    )
}
