import notification from 'antd/lib/notification'
import { ErrorHandler } from 'apollo-link-error'

const handleGraphQLErrors: ErrorHandler = ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path, extensions }) => {
            if (extensions !== undefined && extensions) {
                if (extensions.code === 'FORBIDDEN') {
                    openNotification(
                        'Permissions insuffisantes',
                        'Essayez de vous reconnecter et vérifiez quand vous avez les droits suffisants'
                    )
                }
            } else {
                openNotification(
                    'Un petit problème de notre côté...',
                    'Aïe ! Re-tentez le coup, sinon contactez-nous.'
                )
            }
        })
    }
    if (networkError) {
        openNotification(
            'Toujours connecté ?',
            'Aïe ! Re-tentez le coup, sinon contactez-nous.'
        )
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
