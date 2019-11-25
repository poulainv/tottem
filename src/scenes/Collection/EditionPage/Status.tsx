import { Box } from 'grommet'
import * as React from 'react'
import { grey500 } from '../../../constants/colors'

export default ({
    onSaved,
    children,
}: {
    onSaved?: (collectionId: string) => void
    children: (
        onSaved: (collectionId: string) => void,
        onChange: () => void,
        onSaving: () => void
    ) => React.ReactNode
}) => {
    const [status, setStatus] = React.useState('')
    const handleSaved = (collectionId: string) => {
        if (onSaved) {
            onSaved(collectionId)
        }
        setStatus('Saved')
    }

    return (
        <React.Fragment>
            <Box
                pad={{ horizontal: 'large' }}
                direction="row"
                justify="end"
                height="24px"
            >
                <p style={{ fontSize: '14px', color: grey500 }}>{status}</p>
            </Box>
            {children(
                handleSaved,
                () => setStatus(''),
                () => setStatus('Saving...')
            )}
        </React.Fragment>
    )
}
