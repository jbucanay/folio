import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom'
import logo from './logo.svg'

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        <img src={logo} width={50}/>
          </IconButton>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'}> Home</Link>
          </Typography>
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/about'}> About</Link>
          </Typography>
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/work'}> Work</Link>
          </Typography>
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/blog'}> Blog</Link>
          </Typography>
          <Button color="inherit"><Link to={'/contact'}>Contact</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
