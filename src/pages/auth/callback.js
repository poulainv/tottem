import React, { Component } from 'react'
import Auth from '../../lib/Auth'

const auth = new Auth()

export default class Callback extends Component {
    componentDidMount() {
        auth.handleAuthentication().then(res => {
            window.location.replace('/')
        })
    }

    render() {
        return ''
    }
}
