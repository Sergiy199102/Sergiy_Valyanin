import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import Logo from './logo.png';

const MenuComponent = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <img src={Logo} alt="Logo" sx={{ width: '100px', height: 'auto' }} />
                <Button color="inherit">Home</Button>
                <Button color="inherit">TV Shows</Button>
                <Button color="inherit">About Us</Button>
            </Toolbar>
        </AppBar>
    );
};

export default MenuComponent;
