import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


import Container from '@mui/material/Container';






const Appbar = () => {


  return (

    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>




          <Typography
            variant="h5"

            component="div"
            color="inherit"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          > <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}> HOME </Link></Typography>

          <Typography
            variant="h6"
            color="inherit"

            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to='/about' style={{ color: '#FFF', textDecoration: 'none' }} >About</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to='/faq' underline='none' style={{ color: '#FFF', textDecoration: 'none' }} >FAQs</Link>

          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to='/trade' underline='none' style={{ color: '#FFF', textDecoration: 'none' }} >Trading</Link>

          </Typography>

        </Toolbar>
      </Container>
    </AppBar>

  );
};
export default Appbar;
