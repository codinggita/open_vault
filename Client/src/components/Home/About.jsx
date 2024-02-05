import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import svg1 from './../../assets/aboutSVG1.svg';
import svg2 from './../../assets/aboutSVG2.svg';

const defaultTheme = createTheme({
    palette: {
        mode: "dark",
    }
});

export default function About() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xl">
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: { xs: '2vh', md: ' 2vh 10vh' },
                        flexDirection: { xs: 'column-reverse', md: 'row' }
                    }}

                >
                    {/* Description 1 */}

                    <Box

                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: { xs: '90%', md: '50%' }
                        }}
                    >
                        <Typography variant='h5' color={'#90caf9'}> Encrypt Files</Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione corrupti sunt quo, sit reprehenderit fuga rem laudantium accusantium eos, placeat alias neque, veritatis tempora? Repellat, consequatur architecto. Modi, labore error!

                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            justifyContent: 'center',

                        }}
                    >
                        <img src={svg1} alt="" style={{ width: '80%' }} />
                    </Box>
                    {/* Description 2 */}
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: { xs: '2vh', md: ' 2vh 10vh' },
                        flexDirection: { xs: 'column', md: 'row' }
                    }}

                >
                    {/* Description 1 */}
                    <Box
                        sx={{
                            justifyContent: 'center',

                        }}
                    >
                        <img src={svg2} alt="" style={{ width: '80%' }} />
                    </Box>

                    <Box

                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: { xs: '90%', md: '50%' }
                        }}
                    >
                        <Typography variant='h5' color={'#90caf9'}> Create Drop</Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione corrupti sunt quo, sit reprehenderit fuga rem laudantium accusantium eos, placeat alias neque, veritatis tempora? Repellat, consequatur architecto. Modi, labore error!

                        </Typography>
                    </Box>
                    {/* Description 2 */}
                </Box>
            </Container>
        </ThemeProvider>
    );
}