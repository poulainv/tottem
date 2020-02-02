import Link from 'next/link'
import * as React from 'react'
import GithubIcon from '../../public/pictograms/github.svg'
import MailIcon from '../../public/pictograms/mail.svg'
import { StyledButton } from '../components/Button'
import { useTracking } from '../scenes/common'

const profileExamples = ['vincent', 'clem', 'francois', 'thinkerview']

export default () => {
    useTracking()
    const [profileExample, setProfileExample] = React.useState(
        profileExamples[Math.floor(Math.random() * profileExamples.length)]
    )
    return (
        <div style={{ backgroundColor: '#FDFDFD' }} className="h-screen w-full">
            <div className="flex flex-col max-w-4xl mx-auto pt-10 justify-between items-center h-full p-4">
                <div className="flex justify-between w-full">
                    <span className="flex items-center">
                        <img
                            className="h-6"
                            src="/logo.svg"
                            alt="Tottem logo"
                        />
                        <h1 className="text-2xl ml-4">Tottem</h1>
                    </span>
                    <span className="flex items-center">
                        <a href="https://github.com/poulainv/tottem">
                            <GithubIcon className="h-8 w-8 fill-current text-gray-800" />
                        </a>
                        <a href="mailto:vincent@tottem.app">
                            <MailIcon className="h-8 w-8 fill-current text-gray-900 ml-4" />
                        </a>
                    </span>
                </div>
                <h1 className="text-5xl text-gray-800 font-regular text-center">
                    All the content you love, in one place
                </h1>
                <div className="flex flex-col items-center">
                    <p className="text-gray-700 text-2xl font-light text-center">
                        Bookmark manager on steroid. Smart, social and
                        beautiful.
                    </p>
                    <div className="flex mt-4 items-center">
                        <Link as="/auth/login" href="/auth/login">
                            <a>
                                <StyledButton className="uppercase">
                                    Get started
                                </StyledButton>
                            </a>
                        </Link>
                        <p className="ml-4">or </p>
                        <a
                            onClick={() =>
                                setProfileExample(
                                    profileExamples[
                                        Math.floor(
                                            Math.random() *
                                                profileExamples.length
                                        )
                                    ]
                                )
                            }
                            target="_blank"
                            href={`/${profileExample}`}
                            className="ml-2 text-green-700 font-medium"
                        >
                            Let's take a look to a random profile 🧐
                        </a>
                    </div>
                </div>
                <img
                    className="rounded mt-4 xl:mt-10 shadow-lg"
                    src="screen.png"
                    alt="Screenshot of Tottem app"
                />
            </div>
        </div>
    )
}
