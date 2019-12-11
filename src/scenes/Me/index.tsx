import { Sidenav } from '../../components/Sidenav'
import * as React from 'react'

export default function MePage() {
    return (
        <div className="flex h-screen text-sm">
            <Sidenav />
            <div className="flex-1" />
        </div>
    )
}
