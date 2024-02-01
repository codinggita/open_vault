import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const StatsComponent = () => {
    return (
        <Box
            width="100%"
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            alignItems="center"
            textAlign="center"
            marginBottom="16px"

            sx={{ background: '#202020' }}
        >
            {/* Stat 1: No of drops created */}
            <Box
                width='23%'
                margin="20px 0"
            >
                <Typography variant="h6">No of Drops Created</Typography>
                <Typography variant="subtitle1">1000</Typography>
            </Box>

            {/* Stat 2: No. of files encrypted */}
            <Box
                width='23%'
                margin="20px 0"

            >
                <Typography variant="h6">No. of Files Encrypted</Typography>
                <Typography variant="subtitle1">500</Typography>
            </Box>

            {/* Stat 3: No. of users */}
            <Box
                width='23%'
                margin="20px 0"

            >
                <Typography variant="h6">No. of Users</Typography>
                <Typography variant="subtitle1">2000</Typography>
            </Box>

            {/* Stat 4: No. of drops opened */}
            <Box
                width='23%'
                margin="20px 0"
            >
                <Typography variant="h6">No. of Drops Opened</Typography>
                <Typography variant="subtitle1">800</Typography>
            </Box>
        </Box>
    );
};

export default StatsComponent;
