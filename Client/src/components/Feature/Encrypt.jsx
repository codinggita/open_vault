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
import Modal from '@mui/material/Modal';
import CryptoJS from 'crypto-js';
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

export default function Encrypt() {

    const [modal, setModal] = React.useState(false);

    const handleOpen = () => setModal(true);
    const handleClose = () => setModal(false);

    const [file, setFile] = React.useState(null);
    const [passphrase, setPassphrase] = React.useState('');

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handlePassphraseChange = (event) => {
        setPassphrase(event.target.value);
    };

    const handleEncrypt = () => {
        if (file && passphrase) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const fileContent = event.target.result;
                const encryptedFile = CryptoJS.AES.encrypt(fileContent, passphrase).toString();

                // Send the encrypted file to the server or perform further actions
                console.log('Encrypted File:', encryptedFile);
            };

            reader.readAsText(file);
        }
    };

    const handleSubmit = (event) => {
        handleEncrypt();
        handleOpen();
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('file'),
            password: data.get('password'),
        });
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
                            <Grid item 
                                sx={{
                                    color: '#90caf9',
                                    fontSize: '12px'
                                }}
                            >
                                Allowed File Type: .pdf, .doc, .docx
                            </Grid>
                        </Grid>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="file"
                            name="file"
                            type='file'
                            inputProps={{ accept: "application/pdf" }}
                            // accept='.pdf, .doc, .docx, application/msword, application/vnd.openxmlformats'
                            autoFocus
                            display='none'
                            onChange={handleFileChange}
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
                            onChange={handlePassphraseChange}
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

                        <Box component="form" onSubmit={handleSubmit} sx={{
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
                    </Box>
                </Box>
            </Modal>

        </ThemeProvider>
    );
}