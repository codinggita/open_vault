import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme({
    palette: {
        mode: "dark",
    }
});

export default function Encrypt() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        navigate('/');
    };

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
                    <Box
                        sx={{
                            width: { xs: '100%', md: '70%' },
                            mt: 1
                        }}
                    >
                        <Typography variant='h4' sx={{ color: '#90caf9' }}>Encrypt</Typography>
                        <Typography sx={{ color: 'white', mt: 3 }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione corrupti sunt quo, sit reprehenderit fuga rem laudantium accusantium eos, placeat alias neque, veritatis tempora? Repellat, consequatur architecto. Modi, labore error!
                        </Typography>
                    </Box>
                    <Box component="form" onSubmit={handleSubmit} sx={{
                        mt: 3, border: 'solid', borderColor: '#90caf9', p: 2,
                        width: { xs: '90%', md: '30%' }
                    }}>
                        <Grid container>
                            <Grid item>
                                <Link href="/signUp" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="file"
                            // label="Upload File"
                            name="file"
                            type='file'
                            autoFocus
                            display='none'
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="New Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            placeholder='Enter Password for File'
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Encrypt
                        </Button>

                        <Grid container>
                            <Grid item>
                                <Link href="/signUp" variant="body2">
                                    {"> ServerMessage"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}