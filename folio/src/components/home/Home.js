import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import {Facebook, Instagram, Twitter, LinkedIn} from "@material-ui/icons";

export default function Home(){
    return (
        <main className='main'>
            <img alt='Gilbert'
                 src={'https://media-exp1.licdn.com/dms/image/C5603AQHPV2uU1cccgw/profile-displayphoto-shrink_800_800/0/1594174635747?e=1642636800&v=beta&t=ViASX9dgU-N3VYmdBlbq4TUMWkvTau5EjEzCFp8WtRY'}
                 className='me'/>
            <section id='homeCont'>
                <header>
                    <h1 className={'hi'}>Hi, I'm Gilbert</h1>
                </header>
                <article>
                    <h2 className={'title'}>Software Developer. Content Creator</h2>
                    <p>Multidisciplinary designer who hacks at, makes and occasionally breaks things.</p>
                    <p>Product Design Director on the team behind <a href={"https://www.utah.edu/"} target={"_blank"}
                                                                     className='more'> U of U</a>.</p>
                    <p>Less moody in real life. ✌️</p>
                    <p><Link to={'/about'} className={'more'}>Learn more</Link></p>
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

                </article>
            </section>

        </main>
    )
}