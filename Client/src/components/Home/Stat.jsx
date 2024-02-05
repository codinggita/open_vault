import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

const Stat = () => {
    return (

        <Container maxWidth='xl' style={{ padding: '0px' }} className='Top'>
            <Box padding={0}>
                <Grid container spacing={2} backgroundColor='#202020'>
                    <Grid xs={6} md={3}>
                        <div style={{ flex: 1, backgroundColor: '#202020', margin: '2vw 0', color: "#90caf9" }}>
                            <Typography variant="h6" component="div">
                                Users
                            </Typography>
                            <Typography variant="h4" component="div">
                                789
                            </Typography>
                        </div>
                    </Grid>
                    <Grid xs={6} md={3}>
                        <div style={{ flex: 1, backgroundColor: '#202020', margin: '2vw 0', color: "#90caf9" }}>
                            <Typography variant="h6" component="div">
                                Drops Created
                            </Typography>
                            <Typography variant="h4" component="div">
                                123
                            </Typography>
                        </div>
                    </Grid>
                    <Grid xs={6} md={3}>
                        <div style={{ flex: 1, backgroundColor: '#202020', margin: '2vw 0', color: "#90caf9" }}>
                            <Typography variant="h6" component="div">
                                Files Encrypted
                            </Typography>
                            <Typography variant="h4" component="div">
                                456
                            </Typography>
                        </div>

                    </Grid>

                    <Grid xs={6} md={3}>
                        <div style={{ flex: 1, backgroundColor: '#202020', margin: '2vw 0', color: "#90caf9" }}>
                            <Typography variant="h6" component="div">
                                Drops Opened
                            </Typography>
                            <Typography variant="h4" component="div">
                                32
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>



        // <section>
        //   <Container maxWidth="xl"> 
        //     <Paper
        //       elevation={3}
        //       style={{
        //         padding: '20px',
        //         display: 'flex',
        //         justifyContent: 'space-between',
        //         alignItems: 'center',
        //         background: '202020', // Change background color as needed
        //       }}
        //     >
        //       {/* Column 1: Number of Drops Created */}
        //       <div style={{ flex: 1 }}>
        //         <Typography variant="h5" component="div">
        //           Drops Created
        //         </Typography>
        //         <Typography variant="h4" component="div">
        //           123
        //         </Typography>
        //       </div>

        //       {/* Column 2: Number of Files Encrypted */}
        //       <div style={{ flex: 1 }}>
        //         <Typography variant="h5" component="div">
        //           Files Encrypted
        //         </Typography>
        //         <Typography variant="h4" component="div">
        //           456
        //         </Typography>
        //       </div>

        //       {/* Column 3: Number of Users */}
        //       <div style={{ flex: 1 }}>
        //         <Typography variant="h5" component="div">
        //           Users
        //         </Typography>
        //         <Typography variant="h4" component="div">
        //           789
        //         </Typography>
        //       </div>
        //     </Paper>
        //   </Container>
        // </section>
    );
};

export default Stat;
