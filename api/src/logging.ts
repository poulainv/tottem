import { createLogger, format, transports } from 'winston'

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.colorize({ all: true }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'tottem-api' },
})

// if (process.env.NODE_ENV !== 'production') {
logger.add(
    new transports.Console({
        format: format.combine(format.colorize(), format.simple()),
    })
)
// }

export default logger
