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

          <Link to='/' underline='none' color='inherit' >HOME</Link>


          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
           
              <Typography
              variant="h5"
              noWrap
              component="div"
              color="lightgoldenrodyellow"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            > <Link to='/' ></Link>HOME</Typography>
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to='/about' underline='none' >About</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to='/faq' underline='none' >FAQs</Link>

          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to='/trade' underline='none' >Trading</Link>

          </Typography>

        </Toolbar>
      </Container>
    </AppBar>

  );
};
export default Appbar;
