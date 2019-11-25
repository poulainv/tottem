import notification from 'antd/lib/notification'

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

export { openNotification }
