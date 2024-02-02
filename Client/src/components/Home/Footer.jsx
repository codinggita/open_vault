import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  }
});


const Footer = () => {
  return (
    <ThemeProvider theme={defaultTheme}>

      <Paper
        component="footer"
        elevation={2} // You can adjust the elevation if you want a shadow
        style={{
          padding: '20px',
          marginTop: '20px',
          textAlign: 'center',
          background: '#242424'
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} openVault. All rights reserved.
        </Typography>
      </Paper>
    </ThemeProvider>
  );
};

export default Footer;
