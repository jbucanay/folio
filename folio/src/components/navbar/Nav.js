import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {NavLink, Link} from 'react-router-dom'
import './nav.css'
import {Instagram, LinkedIn, Twitter} from "@material-ui/icons";

export default function Nav() {
    return (
        <Box sx={{flexGrow: 1}}>

            <AppBar position="static" className='appbar' style={{background: '#000000'}}>
                <Typography variant="h7" component="div" sx={{flexGrow: 1}} className='flex'>
                   <Link to={'/'}> <p id='myname'>Gilbert Baracka</p></Link>
                    <div className='linkIcon'>
                    <NavLink
                        to="/"
                        className={'navLink'}
                    >
                        Home
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
                    {/*<section className={'iconCont'}>*/}
                        <a href='https://www.linkedin.com/in/gilbertbaracka/' target='_blank'><LinkedIn fontSize='large'
                                                                                                        style={{color: 'white'}}
                                                                                                        className='icon'/></a>
                        <a href='https://www.instagram.com/ggibbzzz/' target='_blank'> <Instagram fontSize='large'
                                                                                                  style={{color: 'white'}}
                                                                                                  className='icon'/>
                        </a>
                        <a href='https://twitter.com/B_gibbzz' target='_blank'><Twitter fontSize='large'
                                                                                        style={{color: 'white'}}
                                                                                        className='icon'/></a>
                    {/*</section>*/}
                        </div>
                </Typography>


            </AppBar>
        </Box>
    );
}
