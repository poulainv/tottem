import React from 'react'
import Router from 'next/router'
import { NextPageContext } from 'next'

interface Context extends NextPageContext {
    query: {
        profile: string
        sectionId: string
    }
}

export default class extends React.Component {
    static async getInitialProps(context: Context) {
        if (context.res) {
            context.res.writeHead(302, {
                Location: `/${context.query.profile}`,
            })
            context.res.end()
        } else {
            Router.push(`/${context.query.profile}`)
        }
        return {}
    }
}
