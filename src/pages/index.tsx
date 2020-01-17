import Link from 'next/link'
import * as React from 'react'
import { StyledButton } from '../components/Button'
import { useTracking } from '../scenes/common'

export default () => {
    useTracking()
    return (
        <div style={{ backgroundColor: '#FFFFF9' }} className="h-screen w-full">
            <div className="flex flex-col max-w-4xl mx-auto pt-10 justify-between items-center h-full">
                <div className="flex justify-between items-center w-full">
                    <img
                        className="h-6 self-start"
                        src="/logo.svg"
                        alt="Tottem logo"
                    />
                    <h1 className="text-2xl">Tottem</h1>
                </div>
                <h1 className="text-5xl text-gray-800 font-regular text-center">
                    All the content you love, in one place
                </h1>
                <div className="flex flex-col items-center">
                    <p className="text-gray-700 text-2xl font-thin">
                        Tottem is your new library. Smart, social and beautiful.
                    </p>
                    <Link as="/auth/login" href="/auth/login">
                        <a className="w-32 mt-4">
                            <StyledButton> Get started </StyledButton>
                        </a>
                    </Link>
                </div>
                <img
                    className="rounded mt-10 shadow-lg"
                    src="screen.png"
                    alt=""
                />
            </div>
        </div>
    )
}
