import { Box } from 'grommet'
import styled from 'styled-components'

const Artwork: React.FC = props => (
    <img
        alt="Artwork"
        style={{
            display: 'block',
            width: '100%',
            height: 'auto',
        }}
        src="/images/artworks/landing-illustration-ld.png"
    />
)

const ResponsiveBox = styled(Box)`
    width: 624px;
    @media screen and (max-width: 1530px) {
        width: 412px;
    }
`

export const MobileArtwork: React.FC = props => {
    return (
        <Box
            style={{
                width: '238px',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
        >
            <Artwork />
        </Box>
    )
}

export const LargeResponsiveArtwork: React.FC = props => {
    return (
        <ResponsiveBox>
            <Artwork />
        </ResponsiveBox>
    )
}
