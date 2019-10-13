import React, { Component } from 'react'
import Auth from '../lib/Auth'
const auth = new Auth()

export default class Secure_page extends Component {
    componentDidMount() {
        var user_data = localStorage.getItem('user_details')
        var isLoggedIn = localStorage.getItem('isLoggedIn')
        if (!isLoggedIn || !user_data) {
            window.location.replace('/')
        }
    }

    logout() {
        auth.logout()
    }

    render() {
        return (
            <div>
                <h1>Your Secure Page</h1>
                <button onClick={() => this.logout()}>Logout</button>
            </div>
        )
    }
}
