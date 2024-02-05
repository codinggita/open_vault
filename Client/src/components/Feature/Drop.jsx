import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Typography, Link } from '@mui/material';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import GetAppIcon from '@mui/icons-material/GetApp';


const defaultTheme = createTheme({
    palette: {
        mode: "dark",
    }
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '80vw', md: '40vw' },
    bgcolor: 'background.paper',
    border: '2px solid #90caf9',
    boxShadow: 50,
};

export default function Hero() {
    const [modal, setModal] = React.useState(false);

    const handleOpen = () => setModal(true);
    const handleClose = () => setModal(false);

    const handleCreateDrop = (event) => {
        handleOpen();
        event.preventDefault();

    };

    const handleOpenDrop = (event) => {
        handleOpen();
        event.preventDefault();
    }

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
                    <Box component="form" sx={{ mt: 1, width: { xs: '100%', md: '70%' } }}>
                        <Typography variant='h4' sx={{ color: '#90caf9' }}>Drops</Typography>
                        <Typography sx={{ color: 'white', mt: 3 }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione corrupti sunt quo, sit reprehenderit fuga rem laudantium accusantium eos, placeat alias neque, veritatis tempora? Repellat, consequatur architecto. Modi, labore error!
                        </Typography>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ m: 3, mt: 5 }}
                            onClick={handleCreateDrop}
                        >
                            Create Drop
                        </Button>

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ m: 3, mt: 5 }}
                            onClick={handleOpenDrop}
                        >
                            Open Drop
                        </Button>
                    </Box>


                </Box>
            </Container>

            <Modal
                open={modal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            p: 2
                        }}
                    >

                        <Typography variant='h4' sx={{ color: '#90caf9' }}>File Encrypted</Typography>
                        <Typography align='center' sx={{ color: 'white', mt: 1 }}>
                            Your file has been successfully encrypted with the provided password.
                        </Typography>

                        <Box component="form" sx={{
                            p: 2,
                            width: '70%'
                        }}>

                            <Grid container>
                                <Grid item>
                                    <p>
                                        PassWord: Your Pass
                                    </p>
                                    <p>
                                        FileName: Your FileName + encrypted
                                    </p>
                                </Grid>
                            </Grid>


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                startIcon={<GetAppIcon />}
                            >
                                Download
                            </Button>
                        </Box>

                        <Box component="form" sx={{ p: 1, mt: 1, width: { xs: '100%', md: '70%' } }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="text"
                                label="Message"
                                placeholder='Your text goes here'
                                name="textData"
                                autoFocus
                                multiline
                                rows={6}
                            />
                            <Box  
                            
                                sx = {{
                                    display: 'flex'
                                }}
                            >

                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        m: 2,
                                        width: { xs: '100%', md: '30%' }
                                    }}
                                >
                                    Create
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color='secondary'
                                    sx={{
                                        m: 2,
                                        width: { xs: '100%', md: '30%' }
                                    }}
                                >
                                    Cancel
                                </Button>
                            </Box>
                            <Grid container>
                                <Grid item>
                                    <Link href="/signUp" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box component="form" sx={{ p: 1, mt: 1, width: { xs: '100%', md: '70%' } }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type='text'
                                id="text"
                                label="Drop Id"
                                placeholder='Enter Drop ID'
                                name="dropID"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type='password'
                                id="password"
                                label="Drop Pass"
                                placeholder='Enter Drop Password'
                                name="dropPass"
                                autoFocus
                            />
                            <Box  
                            
                                sx = {{
                                    display: 'flex'
                                }}
                            >

                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        m: 2,
                                        width: { xs: '100%', md: '30%' }
                                    }}
                                >
                                    Open
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color='secondary'
                                    sx={{
                                        m: 2,
                                        width: { xs: '100%', md: '30%' }
                                    }}
                                >
                                    Cancel
                                </Button>
                            </Box>
                            <Grid container>
                                <Grid item>
                                    <Link href="/signUp" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Modal>

        </ThemeProvider>
    );
}