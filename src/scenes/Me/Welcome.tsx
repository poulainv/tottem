import * as React from 'react'
import WelcomeSVG from '../../../public/pictograms/welcome.svg'
import ProfileIcon from '../Me/components/Sidenav/profile.svg'
import SpaceIcon from '../../../public/pictograms/space.svg'
import InboxIcon from '../../../public/pictograms/inbox.svg'

export default ({}) => {
    return (
        <div className="margin-auto flex flex-col items-center text-gray-800 justify-center h-full py-10">
            <WelcomeSVG width={860} height={300} />
            <div className="max-w-lg">
                <h1 className="text-3xl font-semibold mt-4">
                    Welcome into your new social library
                </h1>
                <div className="flex flex-col items-center text-lg mt-4">
                    <ul className="list-disc">
                        <li className="mt-1">
                            <span className=" flex flex-start items-center">
                                <span>
                                    Collect into
                                    <span className="font-semibold">
                                        {' '}
                                        Inbox
                                    </span>
                                </span>
                                <InboxIcon
                                    className="ml-2"
                                    height={18}
                                    width={18}
                                />
                            </span>
                        </li>
                        <li className="mt-1">
                            <span className=" flex flex-start items-center">
                                <span>
                                    Organise into
                                    <span className="font-semibold">
                                        {' '}
                                        Spaces & Collections
                                    </span>
                                </span>
                                <SpaceIcon
                                    className="ml-2 fill-current text-yellow-600"
                                    height={18}
                                    width={18}
                                />
                            </span>
                        </li>
                        <li className="mt-1">
                            <span className=" flex flex-start items-center">
                                <span>
                                    Inspire your community sharing your
                                    <span className="font-semibold">
                                        {' '}
                                        Profile
                                    </span>
                                </span>
                                <ProfileIcon
                                    className="ml-2"
                                    height={18}
                                    width={18}
                                />
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="font-semibold text-lg my-10 text-center">
                    Let’s get inspired by first collections we’ve already
                    created or create new ones
                </div>
            </div>
        </div>
    )
}
