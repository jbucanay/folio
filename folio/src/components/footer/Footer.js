import React from 'react'
import './footer.css'
import {Facebook, Instagram, LinkedIn, Twitter} from "@material-ui/icons";

export default function Footer(){
    return (
        <footer className='footer'>

            <section className={'iconCont'}>

                        <a href='https://www.linkedin.com/in/gilbertbaracka/' target='_blank'><LinkedIn fontSize='large' style={{color: 'blue'}} className='icon'/></a>
                        <a target='_blank' href='https://www.facebook.com/jiriberi.bucanayandi/'><Facebook
                            fontSize='large' style={{color: 'blue'}} className='icon'/></a>
                        <a href='https://www.instagram.com/ggibbzzz/' target='_blank'> <Instagram fontSize='large'
                                                                                                  style={{color: 'blue'}}
                                                                                                  className='icon'/>
                        </a>
                        <a href='https://twitter.com/B_gibbzz' target='_blank'><Twitter fontSize='large' style={{color: 'blue'}} className='icon'/></a>
                    </section>
            <p className={'copyright'}>Copyright @{new Date().getFullYear()} by Gilbert Baracka. All Rights Reserved.</p>
        </footer>
    )
}