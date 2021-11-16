import React from 'react'
import './footer.css'
import {Facebook, Instagram, LinkedIn, Twitter} from "@material-ui/icons";

export default function Footer(){
    return (
        <footer className='footer'>


            <p className={'copyright'}>Copyright @{new Date().getFullYear()} by Gilbert Baracka. All Rights Reserved.</p>
        </footer>
    )
}