import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';

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
          marginTop: 'auto',
          textAlign: 'center',
          display: 'flex',
        }}
      >
        <Typography  variant="body2" color="textSecondary" style={{
          width: '40%',
          display: 'flex',
          alignItems: 'center'
        }}>
          © {new Date().getFullYear()} openVault. All rights reserved.
        </Typography>

        <Container style={{
          margin: '10px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row-reverse'
        }}>

          <Link href='https://linktr.ee/shubhansu' className='footerIcon'>
            <LanguageIcon />
          </Link>
          <Link href='https://www.linkedin.com/in/shubhansu-kr' className='footerIcon'>
            <LinkedInIcon />
          </Link>
          <Link href="https://github.com/shubhansu-kr" className='footerIcon'>
            <GitHubIcon />
          </Link>
        </Container>

      </Paper>
    </ThemeProvider>
  );
};

export default Footer;
