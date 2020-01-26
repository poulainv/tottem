import notification from 'antd/lib/notification'
import { ErrorHandler } from 'apollo-link-error'

const handleGraphQLErrors: ErrorHandler = ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path, extensions }) => {
            if (extensions?.code === 'FORBIDDEN') {
                openNotification('Not authorized', 'Try to log-in?')
            } else {
                openNotification(
                    'Something went wrong 😪',
                    'Not your fault, try again...'
                )
            }
        })
    }
    if (networkError) {
        openNotification('Still connected?', 'Check your internet connection')
    }
}

const openNotification = (title: string, message: string) => {
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

export { handleGraphQLErrors }
