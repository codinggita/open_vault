import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';

const defaultTheme = createTheme({
    palette: {
        mode: "dark",
    }
});

export default function Hero() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="l">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minHeight: '70vh'
                    }}
                >
                    <Box component="form" noValidate sx={{ mt: 1, width: {xs :'100%', md: '70%'} }}>
                        <Typography variant='h4' sx={{ color: '#90caf9' }}>Drops</Typography>
                        <Typography sx={{ color: 'white', mt: 3 }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione corrupti sunt quo, sit reprehenderit fuga rem laudantium accusantium eos, placeat alias neque, veritatis tempora? Repellat, consequatur architecto. Modi, labore error!
                        </Typography>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ m: 3, mt: 5 }}
                        >
                            Create Drop
                        </Button>

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ m: 3, mt: 5 }}
                        >
                            Open Drop
                        </Button>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}