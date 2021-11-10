import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'

export default function Home(){
    return (
       <section id='homeCont'>
           <header>
               <h1 className={'hi'}>Hi, I'm Gilbert</h1>
           </header>
           <article>
               <h2 className={'title'}>Software Developer. Content Creator</h2>
               <p>Multidisciplinary designer who hacks at, makes and occasionally breaks things.</p>
<p>Product Design Director on the team behind <a href={"https://www.utah.edu/"} target={"_blank"}> U of U. </a></p>
           <p>Less moody in real life. ✌️</p>
<p><Link to={'/about'}>Learn more</Link>   </p>
           </article>
       </section>
    )
}