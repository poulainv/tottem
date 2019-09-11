import React from 'react'
import BookCard from './components/bookCard'
import books from './data/books'

import { Box, Grid, Grommet, Heading } from 'grommet'
import { Book } from './types'

const theme = {
    global: {
        font: {
            family: 'Roboto',
            height: '20px',
            size: '14px',
        },
    },
}

const AppBar = (props: any) => (
    <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        background="brand"
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation="medium"
        {...props}
    />
)

const App: React.FC = () => {
    return (
        <Grommet theme={theme} full={true}>
            <Box fill>
                <AppBar>
                    <Heading level="3" margin="none">
                        Hello, I'm Vincent
                    </Heading>
                </AppBar>
                <Box
                    direction="row"
                    align="center"
                    justify="center"
                    margin="30px 0px 0px 0px"
                >
                    <Grid
                        rows={['small', 'small']}
                        columns={['xsmall', 'xsmall', 'xsmall']}
                        justify="center"
                        align="center"
                        gap="xsmall"
                    >
                        {books.map((item: Book) => {
                            return <BookCard key={0} {...item} />
                        })}
                    </Grid>
                </Box>
            </Box>
        </Grommet>
    )
}

export default App
