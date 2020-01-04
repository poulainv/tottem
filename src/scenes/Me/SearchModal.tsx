import * as React from 'react'
import classNames from 'classnames'
import ReactModal from 'react-modal'

export interface Props {
    className?: string
    isOpen: boolean
}

export default ({ className, isOpen }: Props) => {
    return (
        <ReactModal
            style={{
                overlay: {
                    backgroundColor: 'transparent',
                },
                content: {
                    width: '300px',
                    height: '300px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    left: '0',
                    right: '0',
                    backgroundColor: 'transparent',
                    padding: '0',
                    border: 'none',
                },
            }}
            isOpen={isOpen}
        >
            <div className="flex flex-col bg-gray-200 h-full w-full rounded-lg p-2">
                <div className="bg-gray-400 rounded h-6"></div>
            </div>
        </ReactModal>
    )
}
