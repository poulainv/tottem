import * as React from 'react'
import ProfilePage from '../ProfilePage'

export default ({ slug }: { slug: string }) => {
    return <ProfilePage profile={slug} />
}
