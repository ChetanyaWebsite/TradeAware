import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Typography, Stack, Button } from '@mui/material'; // Material UI components

import './Header.css';  // Import custom header styles

const Header = () => {
  return (
    <header className="header">  {/* Apply custom header styles */}
      <Stack direction="row" spacing={3} alignItems="center" sx={{ justifyContent: 'center' }}>
        {/* Logo or Title */}
        <Typography variant="h6" sx={{ color: 'white', flexGrow: 1 }}>
          Trade Aware
        </Typography>

        {/* Navigation Buttons */}
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
      </Stack>
    </header>
  );
};

export default Header;
