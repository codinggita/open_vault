import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Stat = () => {
  return (
    <section>
      <Container maxWidth="xl"> {/* Use "xl" for full width */}
        <Paper
          elevation={3}
          style={{
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '202020', // Change background color as needed
          }}
        >
          {/* Column 1: Number of Drops Created */}
          <div style={{ flex: 1 }}>
            <Typography variant="h5" component="div">
              Drops Created
            </Typography>
            <Typography variant="h4" component="div">
              123
            </Typography>
          </div>

          {/* Column 2: Number of Files Encrypted */}
          <div style={{ flex: 1 }}>
            <Typography variant="h5" component="div">
              Files Encrypted
            </Typography>
            <Typography variant="h4" component="div">
              456
            </Typography>
          </div>

          {/* Column 3: Number of Users */}
          <div style={{ flex: 1 }}>
            <Typography variant="h5" component="div">
              Users
            </Typography>
            <Typography variant="h4" component="div">
              789
            </Typography>
          </div>
        </Paper>
      </Container>
    </section>
  );
};

export default Stat;
