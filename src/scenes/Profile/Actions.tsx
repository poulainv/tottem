import * as React from 'react'
import { StyledButton } from '../../components/Button'
import { Box } from 'grommet'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface ProfileActionsProps {
    activeSectionId: string
}

const Actions: React.FunctionComponent<ProfileActionsProps> = props => {
    const router = useRouter()
    return (
        <Box style={{ marginTop: '16px' }} direction="row" justify="end">
            <Link
                href="/w/[profile]/[sectionId]/new"
                as={`/w/${router.query.profile}/${props.activeSectionId}/new`}
            >
                <a>
                    <StyledButton>Nouvelle Collection</StyledButton>
                </a>
            </Link>
        </Box>
    )
}

export default Actions
