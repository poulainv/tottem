import React, { Component } from 'react'
import { Auth0 } from '../_document'

export default class Callback extends Component {
    componentDidMount() {
        Auth0.handleAuthentication().then(res => {
            // TODO when redirectTo is present, correctly redirect
            window.location.replace('/')
        })
    }

    render() {
        return ''
    }
}
