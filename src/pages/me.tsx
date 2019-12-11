import * as React from 'react'
import { withApollo } from '../services/lib/apollo'
import MePage from '../scenes/Me'
import '../index.css'

export default withApollo(() => {
    return <MePage />
})
