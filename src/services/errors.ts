import notification from 'antd/lib/notification'
import { ErrorHandler } from 'apollo-link-error'

const handleGraphQLErrors: ErrorHandler = ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path, extensions }) => {
            if (extensions?.code === 'FORBIDDEN') {
                sendMessage('Try to log-in?', 'Not authorized')
            } else {
                sendMessage('Not your fault, try again...')
            }
        })
    }
    if (networkError) {
        sendMessage('Check your internet connection', 'Still connected?')
    }
}

const sendMessage = (message: string, title = 'Something went wrong 😪') => {
    const isServer = typeof window === 'undefined'
    if (!isServer) {
        notification.error({
            message: title,
            description: message,
            placement: 'bottomRight',
            duration: 6,
        })
    }
}

export { handleGraphQLErrors, sendMessage }
