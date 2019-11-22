import * as React from 'react'
import { withApollo } from '../services/lib/apollo'
import WelcomePage from '../scenes/Welcome'

export default withApollo(() => {
    return <WelcomePage />
})
