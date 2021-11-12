import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {NavLink} from 'react-router-dom'
import './nav.css'

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" className='appbar' style={{background: '#000000'}}>

         <Typography variant="h7" component="div" sx={{ flexGrow: 1 }} className='flex'>

             <NavLink
  to="/"
  className={'navLink'}
>
  Home
</NavLink>

                 <NavLink
  to="/about"
  className={'navLink'}
>
  About
</NavLink>
                 <NavLink
  to="/work"
  className={'navLink'}
>
  Work
</NavLink>
                 <NavLink
  to="/blog"
  className={'navLink'}
>
  Blog
</NavLink>

            <NavLink
  to="/contact"
  className={'navLink'}
  id='loner'
>
  Contact
</NavLink>
</Typography>


      </AppBar>
    </Box>
  );
}
