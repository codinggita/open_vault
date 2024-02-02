import React from 'react'
import Typography from '@mui/material/Typography'

import openVaultLogo from './../../assets/openvault_logo.svg'

const Logo = () => {
    return (
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'primary.main' }}>
            <img src={openVaultLogo} className="logo react" alt="openVault logo" />
        </Typography>
    );
};

export default Logo;