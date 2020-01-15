import { NextPage } from 'next'
import * as React from 'react'
import '../index.css'
import { StyledButton } from '../components/Button'
import Link from 'next/link'

export default () => {
    return (
        <div style={{ backgroundColor: '#FFFFF9' }} className="h-screen w-full">
            <div className="flex flex-col max-w-4xl mx-auto pt-20 justify-between items-center h-full">
                <h1 className="text-5xl text-gray-800 font-regular text-center">
                    All the content you love, in one place
                </h1>
                <p className="text-gray-700 text-2xl font-thin">
                    Tottem is your new library. Smart, social and beautiful.
                </p>
                <Link as="/auth/login" href="/auth/login">
                    <a className="w-32">
                        <StyledButton> Get started </StyledButton>
                    </a>
                </Link>
                <img
                    className="rounded mt-10 shadow-lg"
                    src="screen.png"
                    alt=""
                />
            </div>
        </div>
    )
}
